import React from "react";
import "./NewsletterForm.css";

function NewsletterForm() {
  return (
    <div className="newsletter-form-container">
      <iframe
        width="540"
        height="305"
        src="https://1b75db29.sibforms.com/serve/MUIFAFt6QeLzg-iVAKlhDLseaEB2vRuRVyyc9Y4e1rVm3Cdwp9RPL4JkradzIXj2bFFzTDMCYCGn-8P-pBuX6uD5MkQRuSKGUltGFwWgm4u4reomqrXyHhHpjsqxw4n8Erpi28RiFgRo7hX2lTq7lwN0ugcHB8BIGLuSh3vIDFiyBo2o-c3QUCtMG83WtjkOcYkWuA-5fb2FkTyZiA=="
        frameBorder="0"
        scrolling="auto"
        allowFullScreen
        // style={{
        //   display: "block",
        //   marginLeft: "auto",
        //   marginRight: "auto",
        //   maxWidth: "100%",
        //   //   height: "100dvh",
        // }}
      ></iframe>
    </div>
  );
}

export default NewsletterForm;
