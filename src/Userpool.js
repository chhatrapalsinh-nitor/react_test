import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-east-1_KKM0v1qBJ",
    ClientId: "v9etdp30rav3125epdh792ae4"
}

export default new CognitoUserPool(poolData);