import {
  Box,
  BoxInside,
  BoxOutside,
  ButtonWrap,
  FalseBtn,
  H6,
  Svg,
  TrueBtn,
  Wrapper,
} from "./confirm-style";
import PropTypes from "prop-types";

const Confirm = ({ handleState, deleteClock, clockId, deleteEvent, id }) => {
  const deleteData = () => {
    if (deleteEvent) {
      deleteEvent(clockId, id);
    } else {
      deleteClock(clockId);
    }
    handleState();
  };
  return (
    <Wrapper>
      <BoxOutside onClick={handleState}>
        <BoxInside onClick={(e_) => e_.stopPropagation()}>
          <Box>
            <Svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g strokeWidth="0"></g>
              <g strokeLinecap="round" strokeLinejoin="round"></g>
              <g>
                <path
                  opacity="0.4"
                  d="M12 7.75V13"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M21.0802 8.58003V15.42C21.0802 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0802 7.45003 21.0802 8.58003Z"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  opacity="0.4"
                  d="M12 16.2002V16.3002"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </g>
            </Svg>
            <H6>Are You Sure ?</H6>
            <ButtonWrap>
              <FalseBtn onClick={handleState}>Cancel</FalseBtn>
              <TrueBtn onClick={() => deleteData()}>Ok</TrueBtn>
            </ButtonWrap>
          </Box>
        </BoxInside>
      </BoxOutside>
    </Wrapper>
  );
};

Confirm.propTypes = {
  handleState: PropTypes.func,
  deleteClock: PropTypes.func,
  deleteEvent: PropTypes.func,
  clockId: PropTypes.string.isRequired,
  id: PropTypes.string,
};
export default Confirm;
