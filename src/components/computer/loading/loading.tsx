import { Code } from "phosphor-react"
import { StyledLoading } from "."
import ReactLoading from "react-loading"

export const Loading = () => (
  <StyledLoading>
    <div>
      <Code className="code" size={120} weight="bold" />
      <ReactLoading type="spin" />
    </div>
  </StyledLoading>
)