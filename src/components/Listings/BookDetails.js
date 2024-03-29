import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function BookDetails() {
  let navigate = useNavigate();
  const { _id } = useParams();
  const [book, setBook] = useState();
  const [conditionVerification, setConditionVerification] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3500/book/details/${_id}`)
      .then((res) => {
        setBook(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {book ? (
        <div style={{ margin: "20px" }}>
          <br />
          <img
            style={{
              width: "35%",
              borderRadius: "50px",
              maxHeight: "500px",
              objectFit: "contain",
              border: "5px solid #0047a9",
              float: "left",
            }}
            src={"http://localhost:3500/BookImagesUploaded/" + book.image}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "http://localhost:3500/BookImagesUploaded/noImage.png";
            }}
            alt={"book cover"}
          />
          <div style={{ marginLeft: "30px", float: "left", width: "45%" }}>
            <h1 style={{ marginBottom: "0px" }}>{book.title}</h1>
            <i>by {book.authors}</i>
            <br />
            <br />
            <p>Condition: {book.condition}</p>
            <hr />
            <p>{book.description}</p>
            <hr />
            <Button
              variant="primary"
              onClick={() => navigate("/book-details/" + book._id)}
            >
              Price: ${book.price.toFixed(2)}
            </Button>

            {"         "}
            {book.sold ? (
              <Button variant="danger">SOLD</Button>
            ) : (
              <>
                <Button
                  variant="primary"
                  onClick={() =>
                    navigate(
                      `/order-summary/${book._id}/${conditionVerification}`
                    )
                  }
                >
                  Buy
                </Button>
                <Form.Check
                  type="checkbox"
                  id="conditionVerify"
                  label="Condition Guarantee +$5"
                  checked={conditionVerification}
                  onChange={(event) =>
                    setConditionVerification(event.target.checked)
                  }
                />
              </>
            )}
            {"         "}
            <Button
            href={`mailto:${book.sellerEmail}?Subject=Bookepedia%20Order%20`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Email Seller
          </Button>
            <br />
            <small className="text-muted">Book viewed {book.views} times</small>
            <br />
            <br />
            <p>
              <b>Genre:</b> {book.genre} <br />
              <b>ISBN:</b> {book.isbn} <br />
              <b>Sold by:</b> {book.sellerEmail} <br />
              <b>Date Added:</b>{" "}
              {new Date(book.dateAdded).toLocaleString("en-CA")}
              <br />
            </p>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
