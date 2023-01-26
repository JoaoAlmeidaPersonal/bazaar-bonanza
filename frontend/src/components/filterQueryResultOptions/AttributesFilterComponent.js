import { Form } from "react-bootstrap";

const AttributesFilterComponent = () => {
  return (
    <>
      {[{ color: ["red", "blue", "green"] }, { ram: ["1 TB", "2 TB"]},
        {peso : ["100gr","200gr","300gr"]}].map(
        (item, idx) => (
          <div key={idx} className="mb-3">
            <Form.Label>
              <b>{Object.keys(item)}</b>
            </Form.Label>
            {item[Object.keys(item)].map((i, idx) => (
              <Form.Check
                key={idx}
                type="checkbox"
                id="default-checkbox"
                label={i}
              />
            ))}
          </div>
        )
      )}
    </>
  );
};

export default AttributesFilterComponent;
