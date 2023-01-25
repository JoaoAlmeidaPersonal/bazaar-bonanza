import { Form } from "react-bootstrap";

const CategoryFilterComponent = () => {
  return (
    <>
      <span className="fw-bold">Categoria</span>
      <Form>
        {Array.from({ length: 5 }).map((_, idx) => (
          <div key={idx} className="mb-3">
            <Form.Check type={"checkbox"} id={`check-api2-${idx}`}>
              <Form.Check.Input type={"checkbox"} isValid />
              <Form.Check.Label style={{ cursor: "pointer" }}>
                Categoria {idx + 1}
              </Form.Check.Label>
            </Form.Check>
          </div>
        ))}
      </Form>
    </>
  );
};

export default CategoryFilterComponent;
