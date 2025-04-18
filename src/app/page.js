'use client';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import testImage from "@/assets/image/test.jpeg"
export default function Home() {


  return (
    <main className="container py-5 d-flex justify-content-center align-items-center flex-column" style={{ minHeight: "100vh" }}>
      <section className="text-center mb-5">
        <h5 className="mb-2" style={{ fontSize: "25px", fontWeight: "400" }}>Why Choose Us</h5>
        <h2 className="mb-4 fw-bold">We Are Different From Others</h2>


        <p className="mb-5 text-muted mx-auto" style={{ fontSize: "23px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cupiditate accusantium recusandae soluta explicabo
          hic!
        </p>

        <div className="row align-items-center" style={{ marginTop: "70px" }}>
          <div className="col-lg-7 mb-4 mb-lg-0">
            <div className="position-relative">
              <div
                className="rounded-circle overflow-hidden position-relative"
                style={{
                  width: "400px",
                  height: "400px",
                  margin: "0 35%",
                }}
              >
                <Image
                  src={testImage}
                  alt="Professional working"
                  width={400}
                  height={400}
                  className="object-fit-cover w-100 h-100"
                />
              </div>

              <div
                className="rounded-circle position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center text-white p-4"
                style={{
                  width: "400px",
                  height: "400px",
                  backgroundColor: "#d77a8b",
                  opacity: 0.8,
                }}
              >
                <h4 className="fw-bold mb-3 w-100" style={{ textAlign: "left", fontSize: "25px" }}>Industry Experts</h4>
                <p style={{ textAlign: "left", fontSize: "16px" }}>
                  Lorem ipsum dolor sit amet adipisicing elit. Quas dolores nam ipsam odit quod fuga numquam hic quo!
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="d-flex flex-column gap-3">
              <button className="btn text-start rounded-pill py-3 px-4 d-flex align-items-center bg-light justify-content-between">
                <span className="me-3">&lt;</span>
                <span className="fw-bold" style={{ fontSize: "20px" }}>Industry Experts</span>
              </button>

              <button
                className="btn text-start rounded-pill py-3 px-4 d-flex align-items-center justify-content-between active"
                style={{ backgroundColor: "#d77a8b", color: "white" }}
              >
                <span className="me-3 text-dark">&lt;</span>
                <span className="fw-bold" style={{ fontSize: "20px" }}>Dedicated Team</span>
              </button>

              <button className="btn text-start rounded-pill py-3 px-4 d-flex align-items-center bg-light justify-content-between">
                <span className="me-3">&lt;</span>
                <span className="fw-bold" style={{ fontSize: "20px" }}>Outcome Focused</span>
              </button>

              <button className="btn text-start rounded-pill py-3 px-4 d-flex align-items-center bg-light justify-content-between">
                <span className="me-3">&lt;</span>
                <span className="fw-bold" style={{ fontSize: "20px" }}>High Quality Service</span>
              </button>

              <button className="btn text-start rounded-pill py-3 px-4 d-flex align-items-center bg-light justify-content-between">
                <span className="me-3">&lt;</span>
                <span className="fw-bold" style={{ fontSize: "20px" }}>Cyber Security Expert</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
