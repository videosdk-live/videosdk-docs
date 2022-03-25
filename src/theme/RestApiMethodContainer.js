import React, { useState } from "react";
import CodeBlock from "@theme/CodeBlock";

const generateCurlCode = ({
  headers,
  methodType,
  postParameters,
  queryParameters,
  apiEndpoint,
}) => {
  let code = "";

  // add implicit curl
  code += "cURL ";

  //add headers if any
  if (headers.length != 0) {
    headers.forEach((element) => {
      code += "\t-H '" + element.key + ": " + element.value + "' \\ \n";
    });
  }

  //add post method and its body parameters
  if (methodType == "POST") {
    code += "\t-d '" + parametersToJson(postParameters) + "' \\ \n";
    code += "\t-XPOST " + apiEndpoint;
  }
  //add get method
  else if (methodType == "GET") {
    code += "\t-L -XGET " + apiEndpoint;
  }

  //attach query parameters if any to the url
  if (queryParameters.length != 0) {
    code += "?";
    queryParameters.forEach((element) => {
      if (element.required) code += element.key + "=" + element.value + "&";
    });
    code = code.slice(0, code.length - 1);
  }

  return code;
};

const generateNodeCode = ({
  headers,
  methodType,
  postParameters,
  queryParameters,
  apiEndpoint,
}) => {
  let code = "";

  //node-fetch declaration
  code += "import fetch from 'node-fetch';\n";

  //creating options
  code += "const options = {\n";

  //adding method tye
  code += '\tmethod: "' + methodType + '",\n';

  //add headers if any
  if (headers.length != 0) {
    code += "\theaders: {\n";
    headers.forEach((element) => {
      code += '\t\t"' + element.key + '": "' + element.value + '",\n';
    });
    code += "\t},\n";
  }

  //add body parameters if method type is post
  if (methodType == "POST")
    code +=
      "\tbody: JSON.stringyfy(" + parametersToJson(postParameters) + "),\n";

  //close options json
  code += "};\n";

  if (/\${([A-z])\w+}/.test(apiEndpoint)) {
    var match = apiEndpoint.match(/\${([A-z])\w+}/);
    code += "const " + match[0].slice(2, match[0].length - 1) + ' = "your_' + match[0].slice(2, match[0].length - 1) + '";\n'
  }
  //add url with query parameters
  if (queryParameters.length != 0) {
    code += 'const url= "' + apiEndpoint + "?";
    queryParameters.forEach((element) => {
      if (element.required) code += element.key + "=" + element.value + "&";
    });
    code = code.slice(0, code.length - 1);
    code += '";\n';
  } else {
    code += 'const url= `' + apiEndpoint + '`;\n';
  }

  //fire the request
  code += "const response = await fetch(url, options);\n";
  code += "const data = await response.json();\nconsole.log(data);";

  return code;
};

const generatePhpCode = ({
  headers,
  methodType,
  postParameters,
  queryParameters,
  apiEndpoint,
}) => {
  var code = "";

  //initiate curl
  code += "$curl = curl_init();\n";

  //create body data if applicable
  if (postParameters.length != 0) {
    code += "$data = array(\n";
    // JSON.parse(postParameters).forEach((key,value) => {
    // 	code += "\t\"" + key + "\" => \"" + value + "\",\n";
    // });
    postParameters.forEach((element) => {
      if (element.required)
        code += '\t"' + element.key + '" => "' + element.value + '",\n';
    });
    code += ");\n";
  }

  if (/\${([A-z])\w+}/.test(apiEndpoint)) {
    var match = apiEndpoint.match(/\${([A-z])\w+}/);
    code += "$" + match[0].slice(2, match[0].length - 1) + ' = "your_' + match[0].slice(2, match[0].length - 1) + '";\n'
  }

  //creating curl request
  code += "curl_setopt_array($curl, array(\n";

  //add url with query paramters
  if (queryParameters.length != 0) {
    if (/\${([A-z])\w+}/.test(apiEndpoint)) {
      var match = apiEndpoint.match(/\${([A-z])\w+}/);
      code += '\tCURLOPT_URL => "' + apiEndpoint.slice(0, match.index) + "' . $" + match[0].slice(2, match[0].length - 1) + "?";
    } else {
      code += '\tCURLOPT_URL => "' + apiEndpoint + "?";
    }

    queryParameters.forEach((element) => {
      if (element.required) code += element.key + "=" + element.value + "&";
    });
    code = code.slice(0, code.length - 1);
    code += '",\n';
  } else {
    if (/\${([A-z])\w+}/.test(apiEndpoint)) {
      var match = apiEndpoint.match(/\${([A-z])\w+}/);
      code += '\tCURLOPT_URL => "' + apiEndpoint.slice(0, match.index) + '" . $' + match[0].slice(2, match[0].length - 1) + ',\n';
    } else {
      code += '\tCURLOPT_URL => "' + apiEndpoint + '",\n';
    }
  }

  //extras
  code +=
    "\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\tCURLOPT_RETURNTRANSFER => true,\n\tCURLOPT_ENCODING => '',\n\tCURLOPT_MAXREDIRS => 10,\n\tCURLOPT_TIMEOUT => 0,\n\tCURLOPT_FOLLOWLOCATION => true,\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n";

  //add method type
  code += "\tCURLOPT_CUSTOMREQUEST => '" + methodType + "',\n";

  //adding headers if any
  if (headers.length != 0) {
    code += "\tCURLOPT_HTTPHEADER => array(\n";
    headers.forEach((element) => {
      code += "\t\t'" + element.key + ": " + element.value + "',\n";
    });
    code = code.slice(0, code.length - 2);
    code += "\n\t),\n";
  }

  //adding post body parameter
  if (postParameters.length != 0) {
    code += "\tCURLOPT_POSTFIELDS => json_encode($data),\n";
  }

  //coomplete request
  code += "));\n";

  //fire request and get response
  code += "$response = curl_exec($curl);\ncurl_close($curl);";

  return code;
};

const generatePythonCode = ({
  headers,
  methodType,
  postParameters,
  queryParameters,
  apiEndpoint,
}) => {
  let code = "";

  //import requests
  code += "import requests\n";


  console.log("Testing", /\${([A-z])\w+}/.test(apiEndpoint))
  console.log("Testing", apiEndpoint.match(/\${([A-z])\w+}/))

  //create url
  //check if has ${param} in the url
  if (/\${([A-z])\w+}/.test(apiEndpoint)) {
    var match = apiEndpoint.match(/\${([A-z])\w+}/);
    code += match[0].slice(2, match[0].length - 1) + ' = "your_' + match[0].slice(2, match[0].length - 1) + '"\n'
    code += 'url = "' + apiEndpoint.slice(0, match.index) + '" + ' + match[0].slice(2, match[0].length - 1);
    if (queryParameters.length != 0) {
      code += '+ "'
    } else {
      //close url string quotations
      code += '\n';
    }
  } else {
    code += 'url = "' + apiEndpoint;
    if (queryParameters.length == 0) {
      //close url string quotations
      code += '"\n';
    }

  }

  //add query parameters if any
  if (queryParameters.length != 0) {
    code += "?";
    queryParameters.forEach((element) => {
      if (element.required) code += element.key + "=" + element.value + "&";
    });
    code = code.slice(0, code.length - 1);
    //close url string quotations
    code += '"\n';
  }


  //create headers if any
  if (headers.length != 0) {
    code += "headers = {";
    headers.forEach((element) => {
      code += "'" + element.key + "' : '" + element.value + "',";
    });
    code = code.slice(0, code.length - 1);
    code += "}\n";
  }

  //creating the request
  code += 'response = requests.request("' + methodType + '", url,';

  //if methodType is post add the body parameters
  if (methodType == "POST") {
    code += "json = " + parametersToJson(postParameters) + ",";
  }

  //add headers to the request if present
  if (headers.length != 0) {
    code += "headers = headers";
  }

  //remove trailing comma if any
  if (code.slice(code.length - 1, code.length) == ",")
    code = code.slice(0, code.length - 1);

  //close request
  code += ")\n";

  //print response
  code += "print(response.text)";

  return code;
};

function generateCode({
  headers,
  methodType,
  postParameters,
  queryParameters,
  apiEndpoint,
  language,
}) {
  if (language === "curl") {
    return generateCurlCode({
      headers,
      methodType,
      postParameters,
      queryParameters,
      apiEndpoint,
    });
  } else if (language === "node") {
    return generateNodeCode({
      headers,
      methodType,
      postParameters,
      queryParameters,
      apiEndpoint,
    });
  } else if (language === "php") {
    return generatePhpCode({
      headers,
      methodType,
      postParameters,
      queryParameters,
      apiEndpoint,
    });
  } else if (language === "python") {
    return generatePythonCode({
      headers,
      methodType,
      postParameters,
      queryParameters,
      apiEndpoint,
    });
  }

  return "";
}

function parametersToJson(parameters) {
  var json = "{";
  parameters.forEach((element) => {
    if (element.required) {
      json += '"' + element.key + '" : "' + element.value + '",';
    }
  });
  json = json.slice(0, json.length - 1);
  json += "}";
  return json;
}

const MethodRequestResponse = ({
  headers,
  methodType,
  postParameters,
  apiEndpoint,
  queryParameters,
  response,
}) => {
  const getDefaultRestApiGroupId = () => {
    try {
      return JSON.parse(localStorage.getItem("rest-api-group-id"))
    } catch (err) {
      return { id: "node", value: "NodeJS" }
    }
  }

  const [language, setLanguage] = useState(getDefaultRestApiGroupId());

  const languageList = [
    {
      id: "curl",
      value: "cURL",
    },
    {
      id: "node",
      value: "NodeJS",
    },
    {
      id: "php",
      value: "PHP",
    },
    {
      id: "python",
      value: "Python",
    },
  ];

  return (
    <div>
      <div className="bg-[#333A47] rounded-t-lg pt-4 pb-4 pl-3 flex flex-row flex-wrap align-middle">
        <div className="text-[#72C894] text-sm font-bold">{methodType}</div>
        <div className="text-[#7D8EAD] text-sm font-medium pl-[3px] pr-[3px]">
          |
        </div>
        <div className="flex-1 text-[#7D8EAD] text-sm font-medium">
          {apiEndpoint}
        </div>
        <div className="dropdown dropdown--hoverable dropdown--right">
          <div className="flex flex-row pr-3 cursor-pointers">
            <div className="text-sm text-white-1">{language.value}</div>
            <img
              src="/img/icons/ic_arrow_down.svg"
              className="pl-2 colored_ic_arrow_down"
            />
          </div>
          <ul className="dropdown__menu mt-4 min-w-fit bg-[#252a34]">
            {languageList.map((v) => {
              return (
                <li key={v.id}>
                  <a
                    className="dropdown__link text-sm cursor-pointer"
                    onClick={(e) => {
                      localStorage.setItem("rest-api-group-id", JSON.stringify(v))
                      setLanguage(v);
                    }}
                  >
                    {v.value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="method_code_block">
        <CodeBlock language="js">
          {generateCode({
            headers,
            methodType,
            postParameters,
            queryParameters,
            apiEndpoint,
            language: language.id,
          })}
        </CodeBlock>
      </div>
      <div className="bg-[#333A47] rounded-t-lg pt-4 pb-4 pl-3 flex lg:flex-row flex-col align-middle">
        <div className="flex-1 text-sm font-bold text-white-1">RESPONSE</div>
      </div>
      <div className="method_code_block">
        <CodeBlock language="jsx">
          {JSON.stringify(response, null, 2)}
        </CodeBlock>
      </div>
    </div>
  );
};

const MethodDescription = ({
  description,
  postParameters,
  queryParameters,
}) => {
  return (
    <div className="flex flex-col">
      <div className="text-gray-250">{description}</div>
      {postParameters.length != 0 && (
        <div>
          <div className="text-xl mt-12 font-bold">Body Parameters</div>
          <div className="bg-[#252A34] mt-3 mb-1 h-[1px]"></div>
          {postParameters.map((parameter, index) => {
            return (
              <MethodParameter
                parameterName={parameter.key}
                description={parameter.description}
                required={parameter.required}
                showDivider={index != postParameters.length - 1}
              />
            );
          })}
        </div>
      )}

      {queryParameters.length != 0 && (
        <div>
          <div className="text-xl mt-12 font-bold">Query Parameters</div>
          <div className="bg-[#252A34] mt-3 mb-1 h-[1px]"></div>
          {queryParameters.map((parameter, index) => {
            return (
              <MethodParameter
                parameterName={parameter.key}
                description={parameter.description}
                required={parameter.required}
                showDivider={index != queryParameters.length - 1}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

const MethodParameter = ({
  parameterName,
  required,
  description,
  showDivider,
}) => {
  return (
    <div className="w-full" id={parameterName}>
      <div className="flex flex-row pt-4">
        <div className="font-semibold pr-1.5">
          <a
            href={"#" + parameterName}
            className="font-bold pr-1.5 leading-6 text-base text-white-100"
          >
            {parameterName}
          </a>
        </div>

        {required ? (
          <div className="text-primary font-semibold text-[10px] leading-7">
            REQUIRED
          </div>
        ) : (
          <div className=" text-slate-400 text-[10px] font-medium leading-7">
            OPTIONAL
          </div>
        )}
      </div>
      <div className="text-grayb3 text-sm">{description}</div>

      {showDivider && <div className="bg-[#252A34] mt-3 h-[1px]"></div>}
    </div>
  );
};

function RestApiMethodContainer({
  headers,
  methodType,
  postParameters,
  queryParameters,
  description,
  apiEndpoint,
  response,
}) {
  return (
    <div id="tailwind">
      <div className="flex lg:flex-row flex-col w-full">
        <div className="lg:w-1/2 w-full lg:sticky self-start lg:pr-[18px] flex-grow top-10">
          <MethodDescription
            description={description}
            queryParameters={queryParameters}
            postParameters={postParameters}
          />
        </div>
        <div className="lg:w-1/2 w-full lg:pt-0 pt-4 lg:pl-[18px] lg:sticky self-start flex-grow top-10">
          <MethodRequestResponse
            headers={headers}
            methodType={methodType}
            postParameters={postParameters}
            apiEndpoint={apiEndpoint}
            queryParameters={queryParameters}
            response={response}
          />
        </div>
      </div>
    </div>
  );
}

export default RestApiMethodContainer;
