import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";

const generateCode = ({ language }) => {
  switch (language) {
    case "node":
      var code = "const jwt = require('jsonwebtoken');\n";
      code += "const API_KEY = <YOUR API KEY>;\n";
      code += "const SECRET = <YOUR SECRET>;\n";
      code +=
        "const options = { \n expiresIn: '10m', \n algorithm: 'HS256' \n};\n";
      code += "const payload = {\n";
      code += " apikey: API_KEY,\n";
      code += " permissions: ['allow_join'],\n";
      code += " version: 2,\n";
      code += " role: ['CRAWLER'],\n";
      code += "};\n";
      code += "const token = jwt.sign(payload, SECRET, options);\n";
      code += "console.log(token);";
      return code;
    case "php":
      return "Php";
    case "python":
      return "Python";
  }
};

const MethodRequestResponse = () => {
  const languageList = [
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

  const [language, setLanguage] = useState(languageList[0]);

  useEffect(() => {}, [language]);

  return (
    <div>
      <div className="bg-[#333A47] rounded-t-lg pt-4 pb-4 pl-3 flex flex-row flex-wrap align-middle">
        <div className="text-[#72C894] text-sm font-bold"></div>
        <div className="font-bold text-white-1 text-sm pl-[3px] pr-[3px]">
          TOKEN GENERATION
        </div>
        <div className="flex-1 text-[#7D8EAD] text-sm font-medium"></div>
        <div>
          <div className="flex flex-row pr-3 cursor-pointers">
            <div className="text-sm text-white-1">{language.value}</div>
          </div>
          <ul className="dropdown__menu mt-4 min-w-fit bg-[#252a34]">
            {languageList.map((v) => {
              return (
                <li key={v.id}>
                  <a
                    className="dropdown__link text-sm cursor-pointer"
                    onClick={(e) => {
                      localStorage.setItem(
                        "rest-api-group-id",
                        JSON.stringify(v)
                      );
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
            language: language.id,
          })}
        </CodeBlock>
      </div>
    </div>
  );
};

function GenerateTokenContainer() {
  return (
    <div id="tailwind">
      <div className="lg:w-10/11 w-full lg:pt-0 pt-4 lg:sticky self-start top-10">
        <MethodRequestResponse />
      </div>
    </div>
  );
}

export default GenerateTokenContainer;
