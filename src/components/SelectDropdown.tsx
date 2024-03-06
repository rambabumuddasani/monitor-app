import Form from 'react-bootstrap/Form';

function SelectDropdown() {
    return (
        <>
        <Form.Group controlId="custom-select">
               <Form.Label>Select QA Enviranment</Form.Label>
               <Form.Control as="select" className="rounded-0 shadow">
                    <option className="d-none" value="">
                         Select enviranment
                    </option>
                    {["1", "2", "3", "4", "5"].map(option => (
                         <option key={option}>QAC {option}</option>
                    ))}
               </Form.Control>
          </Form.Group>
        </>
      );}

export default SelectDropdown;