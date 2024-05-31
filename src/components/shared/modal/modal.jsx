import ClockForm from "../clock-form";
import EventForm from "../../clock-events/create-event-form";
import EventItem from "../../clock-events/event-item";
import { ModalBody, ModalInner, ModalSvg } from "./modal-style";
import PropTypes from "prop-types";

const Modal = ({
  isEventForm = false,
  isCreateForm = false,
  isEdit = false,
  handleEvent,
  createEvent,
  handleModal,
  createForm,
  handleClock,
  clock,
  edit,
  title,
  values,
  handleShow,
  showEvent = false,
  getEventsByClockId,
  clockId,
  deleteEvent,
  updateEvent,
  deleteAllEvent,
}) => {
  const onclick = () => {
    if (handleModal) handleModal();
    if (handleShow) handleShow();
  };
  return (
    <>
      <ModalBody>
        <ModalInner onClick={(e_) => e_.stopPropagation()}>
          <ModalSvg
            onClick={() => onclick()}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z"></path>
            </g>
          </ModalSvg>
          {showEvent && (
            <EventItem
              getEventsByClockId={getEventsByClockId}
              clock={clock}
              clockId={clockId}
              deleteEvent={deleteEvent}
              updateEvent={updateEvent}
              deleteAllEvent={deleteAllEvent}
            />
          )}
          {isEventForm && (
            <EventForm
              handleEvent={handleEvent}
              handleModal={handleModal}
              createEvent={createEvent}
              updateEvent={updateEvent}
              clockId={clockId}
              values={values}
              isEdit={isEdit}
            />
          )}
          {isCreateForm && (
            <ClockForm
              handleClock={handleClock}
              handleModal={handleModal}
              createForm={createForm}
              edit={edit}
              title={title}
              values={values}
            />
          )}
        </ModalInner>
      </ModalBody>
    </>
  );
};
Modal.propTypes = {
  isEventForm: PropTypes.bool,
  isCreateForm: PropTypes.bool,
  isEdit: PropTypes.bool,
  handleEvent: PropTypes.func,
  createEvent: PropTypes.bool,
  handleModal: PropTypes.func,
  createForm: PropTypes.bool,
  handleClock: PropTypes.func,
  edit: PropTypes.bool,
  title: PropTypes.bool,
  values: PropTypes.shape({
    title: PropTypes.string,
    timezone: PropTypes.string,
    offset: PropTypes.number,
  }),
  handleShow: PropTypes.func,
  showEvent: PropTypes.bool,
  getEventsByClockId: PropTypes.func,
  clockId: PropTypes.string,
  deleteEvent: PropTypes.func,
  updateEvent: PropTypes.func,
  deleteAllEvent: PropTypes.func,
};
export default Modal;
