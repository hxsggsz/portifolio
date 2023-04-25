import Link from "next/link";
import Image from "next/image";
import { StyledLabel, StyledLogin, StyledForm, StyledInput, StyledEye } from ".";
import login from "../../../../public/login.png";
import { ArrowFatRight, Eye, EyeClosed } from "phosphor-react";

type loginTypes = {
  href: string;
  defaultValue: string;
  isText: boolean;
  setIsText: () => void;
};

export const LoginWindows = (props: loginTypes) => (
  <StyledLogin>
    <Image width={220} height={210} src={login} alt="foto do windows" />

    <div>
      <StyledLabel>
        <h2>PORTIFOLIO</h2>
      </StyledLabel>

      <StyledForm>
        <StyledInput
          className="fake-input"
          data-testId="fake-input"
          type={props.isText ? "text" : "password"}
          disabled={true}
          defaultValue={props.defaultValue}
        />

        <StyledEye data-testId="show-login" onClick={props.setIsText} className="eye">
          {props.isText ? (
            <EyeClosed
              style={{ cursor: "pointer" }}
              color={"black"}
              size={25} />
          ) : (
            <Eye style={{ cursor: "pointer" }} color={"black"} size={25} />
          )}
        </StyledEye>

        <Link data-testId="component" href={props.href}>
          <ArrowFatRight color={"black"} size={25} />
        </Link>
      </StyledForm>
    </div>
  </StyledLogin>
);
