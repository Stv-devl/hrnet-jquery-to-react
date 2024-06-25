import Form from "../../components/form/Form";

/**
 * CreateEmployee component
 * Renders a page with a form to add a new employee.
 * @returns {JSX.Element} - The CreateEmployee page component.
 */
const CreateEmployee = () => {
  return (
    <main>
      <section className="add-worker">
        <h1>Add an employee :</h1>
        <Form />
      </section>
    </main>
  );
};

export default CreateEmployee;
