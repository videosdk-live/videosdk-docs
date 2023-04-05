import React, { useEffect, useState } from "react";
import CodeBlock from "@theme/CodeBlock";

const generateCode = ({ language }) => {
  switch (language) {
    case "node":
      var code = "const crypto = require('crypto');";
      code += "\nconst publicKey = ``";
      code += "\n";
      code += "\napp.post('/webhook', (req, res) => {";
      code += "\n  const signature = req.headers['videosdk-signature'];";
      code += "\n  const body = req.body;";
      code += "\n";
      code += "\n  const isVerified = crypto.verify(";
      code += "\n    'RSA-SHA256',";
      code += "\n    Buffer.from(JSON.stringify(body)),";
      code += "\n    publicKey,";
      code += "\n    Buffer.from(signature, 'base64')";
      code += "\n  );";
      code += "\n";
      code += "\n  if (isVerified) {";
      code += "\n    // your operations";
      code += "\n  }";
      code += "\n});";
      return code;
    case "php":
      var code = `<?php

$publicKey = "";

$route->respond('POST', '/webhook', function ()
{
    header("Content-type: application/json; charset=utf-8");
    $headers = getallheaders(); 

    $data = file_get_contents('php://input'); // string value
    $public_key_rsa = openssl_pkey_get_public($publicKey);
    $signature = base64_decode($headers['videosdk-signature']);

    $result = openssl_verify($data, $signature, $public_key_rsa, OPENSSL_ALGO_SHA256);

    if ($result == 1) {
        echo "signature is valid for given data.";
    } elseif ($ok == 0) {
        echo "signature is invalid for given data.";
    } else {
        echo "error: ".openssl_error_string();
    }
});
  
?>`;
      return code;
    case "python":
      var code = "from flask import Flask, request, abort, jsonify";
      code += "\nimport rsa";
      code += "\nimport base64";
      code += '\npublicKey = ""';
      code += "\n";
      code += "\ndef verify_webhook(data, signature):";
      code += "\n    try:";
      code +=
        "\n        rsa.verify(data, signature, rsa.PublicKey.load_pkcs1(publicKey)) == 'SHA-256'";
      code += "\n        return True";
      code += "\n    except:";
      code += "\n        return False";
      code += "\n";
      code += "\n@app.route('/webhook', methods=['POST'])";
      code += "\ndef handle_webhook():";
      code += "\n    data = request.get_data()";
      code += "\n    sig = request.headers.get('videosdk-signature')";
      code += "\n";
      code +=
        "\n    verified = verify_webhook(jsonify(data), base64.b64decode(sig))";
      code += "\n";
      code += "\n    if not verified:";
      code += "\n        abort(401)";
      code += "\n";
      code += "\n    return ('', 200)";
      return code;
    case "java":
      var code = `import com.sun.net.httpserver.Headers;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.*;
import javax.crypto.spec.*;
import java.nio.charset.StandardCharsets;
import java.security.*;
import java.util.Base64;

class SignatureVerificationHandler implements HttpHandler {
    private String encodingAlgorithm = "SHA256";
    private String publicKey = "";
    private String headerThatContainsSignature = "videosdk-signature";

    private boolean verifySignature(String payload, String signature) throws NoSuchAlgorithmException, InvalidKeyException {
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initVerify(getPublicKey(publicKey));
        signature.update(payload.getBytes());
        boolean verified = signature.verify(Base64.getDecoder().decode(signature));
        return verified;
    }

    public PublicKey getPublicKey(String publicKeystr) {
        try {
            X509EncodedKeySpec keySpec = new X509EncodedKeySpec(publicKeystr.getBytes());
            KeyFactory keyFactory = KeyFactory.getInstance("RSA");
            PublicKey publicKey = keyFactory.generatePublic(keySpec);
            return publicKey;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (InvalidKeySpecException e) {
            e.printStackTrace();
        }
        return publicKey;
    }

    @Override
    public void handle(HttpExchange httpExchange) throws IOException {
        Headers headers = httpExchange.getRequestHeaders();
        String signature = headers.getFirst(headerThatContainsSignature);
        String payload = readBody(httpExchange);
        try {
            boolean isValidMessage = verifySignature(payload, signature);
            if (isValidMessage) {
                System.out.println("Got valid signature, returning 200");
                returnWithStatus(httpExchange, 200);
                return;
            }
        } catch (Exception e) {
            System.out.println("Exception encountered, return 500 server error");
            returnWithStatus(httpExchange, 500);
            return;
        }
        System.out.println("Invalid signature, returning 401 Unauthorized");
        returnWithStatus(httpExchange, 401);
    }

    private String readBody(HttpExchange httpExchange) throws IOException {
        BufferedInputStream stream = new BufferedInputStream(httpExchange.getRequestBody());
        ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();
        for (int result = stream.read(); result != -1; result = stream.read()) {
            byteBuffer.write((byte) result);
        }
        return byteBuffer.toString(StandardCharsets.UTF_8);
    }

    private void returnWithStatus(HttpExchange httpExchange, int httpStatusCode) throws IOException {
        httpExchange.sendResponseHeaders(httpStatusCode, 0);
        httpExchange.getResponseBody().close();
    }
}`;
      return code;
  }
};

const MethodRequestResponse = () => {
  const languageList = [
    {
      id: "node",
      value: "NodeJS",
      code: "js",
    },
    {
      id: "php",
      value: "PHP",
      code: "js",
    },
    {
      id: "python",
      value: "Python",
      code: "python",
    },
    {
      id: "java",
      value: "Java",
      code: "java",
    },
  ];

  const [language, setLanguage] = useState(languageList[0]);

  useEffect(() => {}, [language]);

  return (
    <div>
      <div className='bg-[#333A47] rounded-t-lg pt-4 pb-4 pl-3 flex flex-row flex-wrap align-middle'>
        <div className='text-[#72C894] text-sm font-bold'></div>
        <div className='font-bold text-white-1 text-sm pl-[3px] pr-[3px]'>
          Webhook Verification
        </div>
        <div className='flex-1 text-[#7D8EAD] text-sm font-medium'></div>
        <div className='dropdown dropdown--hoverable dropdown--right'>
          <div className='flex flex-row pr-3 cursor-pointer'>
            <div className='text-sm text-white-1'>{language.value}</div>
            <img
              src='/img/icons/ic_arrow_down.svg'
              className='pl-2 colored_ic_arrow_down'
            />
          </div>
          <ul className='dropdown__menu min-w-fit bg-[#252a34]'>
            {languageList.map((v) => {
              return (
                <li key={v.id}>
                  <a
                    className='dropdown__link text-sm cursor-pointer'
                    onClick={(e) => {
                      setLanguage(v);
                    }}>
                    {v.value}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='method_code_block'>
        <CodeBlock language={language.code}>
          {generateCode({
            language: language.id,
          })}
        </CodeBlock>
      </div>
    </div>
  );
};

function WebhookVerificationContainer() {
  return (
    <div id='tailwind'>
      <div className='lg:w-10/11 w-full lg:pt-0 pt-4 lg:sticky self-start top-10'>
        <MethodRequestResponse />
      </div>
    </div>
  );
}

export default WebhookVerificationContainer;
