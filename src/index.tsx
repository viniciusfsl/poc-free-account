import React, { useEffect, useState } from "react";
import { request as procoreRequest } from '@procore/core-http';

type Employee = {
  first_name: string;
  last_name: string;
  user_id: string;
};

type Props = {
  companyId: string;
};

const Employees = ({ companyId }: Props) => {
  const [employees, setEmployees] = useState<Array<Employee>>([]);

  useEffect(() => {
    procoreRequest(`/rest/v1.1/companies/${companyId}/employees`, {})
      .then(res => res.json())
      .then(setEmployees);
  }, [])

  return (
    <>
      <h1>Employees from poc</h1>
      {employees.map(employee => (
        <div key={employee.user_id}>{employee.first_name}</div>
      ))}
    </>
  )
};

export default Employees;
