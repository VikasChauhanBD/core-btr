import React from "react";
import VerifyIdentityForm from "../components/deleteAccount/VerifyIdentityForm";
import { Helmet } from "react-helmet";

function DeleteAccountPage() {
  return (
    <div>
      <Helmet>
        <title>Delete Account - CoreBTR</title>

        <meta
          name="description"
          content="Manage your CoreBTR profile easily with the delete account option, ensuring full control over your data, access, and learning preferences anytime."
        />
      </Helmet>

      <VerifyIdentityForm />
    </div>
  );
}

export default DeleteAccountPage;
