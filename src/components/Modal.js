import styled from 'styled-components'
import PropTypes from 'prop-types'

const ModalStyles = styled.div`
  position: fixed;
  bottom: -150vh;
  /* top: 50%; */
  transform: translate(-50%, -50%);
  left: 50%;
  transition: bottom 0.3s ease-out;
  z-index: 10;
  > button {
    position: absolute;
    right: 6px;
    z-index: 1;
    font-size: 36px;
  }
  &.Show {
    bottom: -50px;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`
const OverlayStyles = styled.div`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: none;
  z-index: 5;
  transition: background-color 1s ease-in;
  &.Show {
    background-color: rgba(0, 0, 0, 0.55);
    display: block;
  }
`

const Modal = (props) => {
  const { children, displayModal, setDisplayModal } = props
  return(
    <>
      <ModalStyles className={displayModal ? 'Show' : ''}>
        <button className="minimal" onClick={() => setDisplayModal(!displayModal)}>&times;</button>
        {children}
      </ModalStyles>
      <OverlayStyles className={displayModal ? 'Show' : ''} onClick={() => setDisplayModal(!displayModal)} />
    </>
  )
}

Modal.propTypes = {
  displayModal: PropTypes.bool,
  setDisplayModal: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Modal