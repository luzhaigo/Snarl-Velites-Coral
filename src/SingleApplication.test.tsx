import { render, screen } from "@testing-library/react";
import SingleApplication from "./SingleApplication";

test("renders SingleApplication", () => {
  render(
    <SingleApplication
      application={{
        id: 1,
        first_name: "Sherman",
        last_name: "Gerlach",
        loan_amount: 85268,
        loan_type: "CBILS",
        email: "Carroll47@yahoo.com",
        company: "Kulas, Renner and Dietrich",
        date_created: "2021-04-19T17:45:11.314Z",
        expiry_date: "2023-03-03T19:56:59.829Z",
        avatar: "https://avatars.githubusercontent.com/u/52583916",
        loan_history: [
          {
            loan_started: "2023-03-15T18:17:12.599Z",
            loan_ended: "2023-10-14T21:29:40.739Z",
            principle: 5763,
            interest_rate: 0.1,
            interest: 576,
          },
        ],
      }}
    />
  );

  const name = screen.getByText(/Sherman Gerlach/i);
  expect(name).toBeInTheDocument();

  const company = screen.getByText(/Kulas, Renner and Dietrich/i);
  expect(company).toBeInTheDocument();

  const email = screen.getByText(/Carroll47@yahoo\.com/i);
  expect(email).toBeInTheDocument();

  const loanAmount = screen.getByText(/85268/i);
  expect(loanAmount).toBeInTheDocument();

  const applicationDate = screen.getByText(/2021-04-19T17:45:11.314Z/i);
  expect(applicationDate).toBeInTheDocument();

  const expiryDate = screen.getByText(/2023-03-03T19:56:59.829Z/i);
  expect(expiryDate).toBeInTheDocument();
});
