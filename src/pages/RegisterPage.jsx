import { useState } from "react";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { postUserActions } from "../redux/registerActions";
import { useEffect } from "react";

const RegisterPage = () => {
  const [type, setType] = useState("password");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const changeType = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setType("text");
    } else {
      setType("password");
    }
  };

  const postFunc = (e) => {
    e.preventDefault();
    if (user.email === "" || user.password === "") {
      alert("Заполните поля");
    }
    else{
        dispatch(postUserActions(user));
    }
  };

  return (
    <div style={{ width: "500px", textAlign: "left" }}>
      <Form onSubmit={postFunc}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            value={user.email}
            type="email"
            placeholder="Enter email"
            onChange={(e) => setUser({ ...user, email: e.target.value })}
          />
          <Form.Text className="text-muted">Заполни пж</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={user.password}
            type={type}
            placeholder="Password"
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Смотреть" onClick={changeType} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
