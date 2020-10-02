import React, { useCallback, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import { googleTranslate } from "../../utils/googleTranslate.js";
import { random } from "lodash";

const ErrorPage = ({ className }) => {
  const history = useHistory();
  const [translatedText, setTranslatedText] = useState("");
  const [targetLanguage, setTargetLanguage] = useState("");
  
  const translate = () => {
    googleTranslate.translate('My name is Brandon', 'es', function(err, translation) {
      setTranslatedText(translation.translatedText);
    });
  }

  useEffect(() => {
    const supportedLanguagesArray = googleTranslate.getSupportedLanguages(function(err, languageCodes) {
      console.log(languageCodes);
      // => ['af', 'ar', 'be', 'bg', 'ca', 'cs', ...]
    });
    // const randInt = random(100);
    console.log(targetLanguage);
  }, []);

  return (
    <div className={className}>
      <h1>{translatedText} :(</h1>
      <p>That's {} for "This page does not exist"</p>
      <Button onClick={() => history.push("/")}>Go back to Home</Button>
    </div>
  );
};

export default styled(ErrorPage)`
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
