/* eslint-disable react/prop-types */
import styled, { keyframes } from 'styled-components'
import Alert from '@reach/alert'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

const StyledSpinner = styled.svg`
animation: rotate 2s linear infinite;
margin: -25px 0 0 -25px;
width: 50px;
height: 50px;

& .path {
  stroke: #FFB17A;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes dash {
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
}
`
const Spinner = () => (
  <StyledSpinner viewBox="0 0 50 50">
    <circle
      className="path"
      cx="25"
      cy="25"
      r="20"
      fill="none"
      strokeWidth="4"
    />
  </StyledSpinner>
)


const StyledFullPageSpinner = styled.div`
  height: 100vh;
  background: var(--light-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
`
const FullPageSpinner = () => (
  <StyledFullPageSpinner>
    <Spinner />
  </StyledFullPageSpinner>
)



const rotate = keyframes`
  from {
    transform: rotate(0deg);
    transform-origin: 50% 50%;
  }

  to {
    transform: rotate(360deg);
    transform-origin: 50% 50%;
  }
`

const Loading = styled(AiOutlineLoading3Quarters)`
  animation: ${rotate} 2s linear infinite;
`

export {
  Spinner,
  Loading,
  FullPageSpinner
}

