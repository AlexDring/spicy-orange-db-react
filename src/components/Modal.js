import styled from 'styled-components'
import PropTypes from 'prop-types'

const ModalStyles = styled.div`
  position: fixed;
  bottom: -150vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
`
const OverlayStyles = styled.div`
  background-color: rgba(0, 0, 0, 0.55);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: none;
  z-index: 5;
  &.Show {
    display: block;
  }
`

const Modal = (props) => {
  const { children, displayModal, setDisplayModal } = props
  return(
    <>
      {displayModal && 
      <ModalStyles className="Show">
        <button className="Close minimal" onClick={() => setDisplayModal(!displayModal)}>
        &times;
        </button>
        {children}
      </ModalStyles>}
      {displayModal && <OverlayStyles className='Show' onClick={() => setDisplayModal(!displayModal)} />}
    </>
  )
}

Modal.propTypes = {
  displayModal: PropTypes.bool,
  setDisplayModal: PropTypes.func,
  children: PropTypes.node.isRequired
}

export default Modal