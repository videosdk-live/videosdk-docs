import React, { useState } from "react";
import CodeBlock from '@theme/CodeBlock';

function generateCode({
	headers,
	methodType,
	postParameters,
	queryParameters,
	apiEndpoint, language
}) {
	var code = "";
	//language = curl
	if (language == "curl") {

		// add implicit curl
		code += "cURL ";

		//add headers if any
		if (headers) {
			headers.forEach(element => {
				code += "\t-H \'" + element.key + ": " + element.value + "\' \\ \n"
			});
		}

		//add post method and its body parameters
		if (methodType == "POST") {
			code += "\t-d \'" + parametersToJson(postParameters) + "\' \\ \n";
			code += "\t-XPOST " + apiEndpoint;
		}
		//add get method
		else if (methodType == "GET") {
			code += "\t-L -XGET " + apiEndpoint;
		}

		//attach query parameters if any to the url
		if (queryParameters) {
			code += "?"
			queryParameters.forEach(element => {
				code += element.key + "=" + element.value + "&"
			});
			code = code.slice(0, code.length - 1);
		}

	}
	//language = nodeJs
	else if (language == "node") {
		//request declaration
		code += "var request = require(\"request\");\n";

		//creating options
		code += "var options = {\n";

		//adding method tye
		code += "\tmethod: \"" + methodType + "\",\n";

		//add url with query parameters
		if (queryParameters) {
			code += "\turl: \"" + apiEndpoint + "?";
			queryParameters.forEach(element => {
				code += element.key + "=" + element.value + "&"
			});
			code = code.slice(0, code.length - 1);
			code += "\",\n"
		}
		else {
			code += "\turl: \"" + apiEndpoint + "\",\n";
		}

		//add headers if any
		if (headers) {
			code += "\theaders: {\n"
			headers.forEach(element => {
				code += "\t\t\"" + element.key + "\": \"" + element.value + "\",\n"
			})
			code += "\t},\n"
		}

		//add body parameters if method type is post
		if (methodType == "POST")
			code += "\tbody: JSON.stringyfy(" + parametersToJson(postParameters) + "),\n"

		//close options json
		code += "};\n"

		//fire the request
		code += "request(options, function (error, response, body) {\n\tif (error) throw new Error(error);\n\n\tconsole.log(body);\n});"
	}
	//language = php
	else if (language == "php") {

		//initiate curl
		code += "$curl = curl_init();\n";

		//create body data if applicable
		if (postParameters) {
			code += "$data = array(\n";
			// JSON.parse(postParameters).forEach((key,value) => {
			// 	code += "\t\"" + key + "\" => \"" + value + "\",\n";
			// });
			postParameters.forEach(element => {
				if (element.required)
					code += "\t\"" + element.key + "\" => \"" + element.value + "\",\n";
			})
			code += ");\n"
		}

		//creating curl request
		code += "curl_setopt_array($curl, array(\n"

		//add url with query paramters
		if (queryParameters) {
			code += "\tCURLOPT_URL => \"" + apiEndpoint + "?";
			queryParameters.forEach(element => {
				code += element.key + "=" + element.value + "&"
			});
			code = code.slice(0, code.length - 1);
			code += "\",\n"
		} else {
			code += "\tCURLOPT_URL => " + apiEndpoint + ",\n";
		}

		//extras
		code += "\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n\tCURLOPT_RETURNTRANSFER => true,\n\tCURLOPT_ENCODING => '',\n\tCURLOPT_MAXREDIRS => 10,\n\tCURLOPT_TIMEOUT => 0,\n\tCURLOPT_FOLLOWLOCATION => true,\n\tCURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,\n"

		//add method type
		code += "\tCURLOPT_CUSTOMREQUEST => 'POST',\n"

		//adding headers if any
		if (headers) {
			code += "\tCURLOPT_HTTPHEADER => array(\n"
			headers.forEach(element => {
				code += "\t\t\'" + element.key + ": " + element.value + "\',\n"
			})
			code = code.slice(0, code.length - 2);
			code += "\n\t),\n"
		}

		//adding post body parameter
		if (postParameters) {
			code += "\tCURLOPT_POSTFIELDS => json_encode($data),\n"
		}

		//coomplete request
		code += "));\n"

		//fire request and get response
		code += "$response = curl_exec($curl);\ncurl_close($curl);"

	}
	//language = python
	else if (language == "python") {
		//ipmort requests
		code += "import requests\n";

		//create url
		code += "url = \"" + apiEndpoint;

		//add query parameters if any
		if (queryParameters) {
			code += "?"
			queryParameters.forEach(element => {
				code += element.key + "=" + element.value + "&"
			});
			code = code.slice(0, code.length - 1);
		}
		//close url string quotations
		code += "\"\n";

		//create headers if any
		if (headers) {
			code += "headers = {"
			headers.forEach(element => {
				code += "\'" + element.key + "\' : \'" + element.value + "\',"
			});
			code = code.slice(0, code.length - 1)
			code += "}\n"
		}

		//creating the request
		code += "response = requests.request(\"" + methodType + "\", url, "

		//if methodType is post add the body parameters
		if (methodType == "POST") {
			code += "json = " + parametersToJson(postParameters) + ",";
		}

		//add headers to the request if present
		if (headers) {
			code += "headers = headers"
		}
		//close request
		code += ");\n";

		//print response
		code += "print(response.text)";
	}
	return code;
}

function parametersToJson(parameters) {
	var json = "{";
	parameters.forEach(element => {
		if (element.required) {
			json += "\"" + element.key + "\" : \"" + element.value + "\"";
		}
	});
	json = json.slice(0, json.length - 1);
	json += "}";
	return json;
}

const MethodRequest = ({
	headers,
	methodType,
	postParameters,
	apiEndpoint,
	queryParameters,
	response
}) => {

	const [language, setLanguage] = useState({ id: "node", value: "NodeJS" });
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
			<div className="bg-gray-800 rounded-md">
				<div className="bg-gray-500 rounded-t-md p-2 flex flex-row">
					<div className={methodType === "POST" ? "text-green-500 pl-2 pr-2 pt-1 pb-1 bg-gray-750 rounded-md font-semibold" : "text-cyan-500 pl-2 pr-2 pt-1 pb-1 bg-gray-800 rounded-md"}>
						{methodType}
					</div>
					<div className="flex-1 p-1">
						{apiEndpoint}
					</div>
					<div class="navbar__item dropdown dropdown--hoverable dropdown--right">
						<a href="#" class="navbar__link">{language.value}</a>
						<ul class="dropdown__menu">
							{
								languageList.map((v) => {
									return <li>
										<a class="dropdown__link" onClick={(e) => {
											setLanguage(v);
										}}>{v.value}</a>
									</li>
								})
							}
						</ul>
					</div>
				</div>
				<div>
					<CodeBlock language="jsx">
						{generateCode({ headers, methodType, postParameters, queryParameters, apiEndpoint, language: language.id })}
					</CodeBlock>
				</div>
			</div>
			<div className="bg-gray-800 rounded-md">
				<div className="bg-gray-500 rounded-t-md p-2 flex flex-row">
					<div className="flex-1 p-1">
						Response
					</div>
				</div>
				<div>
					<CodeBlock language="jsx">
						{JSON.stringify(response)}
					</CodeBlock>
				</div>
			</div>
		</div>
	);
};

const MethodDescription = ({ description, postParameters, queryParameters }) => {
	return (
		<div className="flex flex-col">
			<div>
				{description}
			</div>

			{console.log(postParameters, queryParameters)}

			{postParameters && <div>
				<div className="text-lg mt-8 font-bold">
					Body Parameters
				</div>
				<div className="bg-gray-750 mt-3 h-0.5"></div>
				{postParameters.map(parameter => {
					console.log(parameter);
					return <MethodParameter {...parameter} />
				})}
			</div>}

			{queryParameters && <div>
				<div className="text-lg mt-8 font-bold">
					Query Parameters
				</div>
				<div className="bg-gray-750 mt-3 h-0.5"></div>
				{queryParameters.map(parameter => {
					return <MethodParameter {...parameter} />
				})}
			</div>}

		</div>
	);
};

const MethodParameter = ({ key, required, description }) => {
	return (
		<div className="w-full">
			<div className="flex flex-row pt-4">
				{console.log(key)}
				<div className="font-semibold">
					{key}
				</div>

				{required ?
					<div className="text-red-600 text-xs">
						REQUIRED
					</div>
					:
					<div className=" text-slate-500 text-xs">
						optional
					</div>
				}

			</div>
			<div>
				{description}
			</div>
			<div className="bg-gray-750 mt-3 h-0.5"></div>
		</div>
	);
};

const data = {
	headers: [
		{
			key: "Authorization",
			value: "$YOUR_TOKEN"
		},
		{
			key: "Content-Type",
			value: "application/json"
		}
	],
	methodType: "POST",
	postParameters: [
		{
			key: "region",
			value: "sg001",
			description: "Region for the room",
			required: true,
		},
		{
			key: "customId",
			value: "xyz",
			description: "Custom Id",
			required: false,
		}
	],
	queryParameters: [
		{
			key: "page",
			value: "1",
			description: "Current Page number",
			required: false,
		},
		{
			key: "perPage",
			value: "10",
			description: "Items per page",
			required: false,
		}
	],
	apiEndpoint: "https://api.videosdk.live/v2/rooms",
	response: {
		meetingId: "asdf-asdf-asdf"
	}
}

function Method({
	headers,
	methodType,
	postParameters,
	description,
	apiEndPoint
}) {
	return (
		<div
			id="tailwind"
			className="w-full flex flex-col content-center"
		>
			<div className="flex lg:flex-row flex-col w-full" >
				<div className="lg:w-1/2 w-full sticky self-start flex-grow">
					<MethodDescription description={description} {...data} />
				</div>
				<div className="lg:w-1/2 w-full lg:pt-0 pt-4 lg:pl-4 sticky self-start flex-grow">
					<MethodRequest
						{...data}
					/>
				</div>
			</div>
		</div>
	)
};

export default Method;
