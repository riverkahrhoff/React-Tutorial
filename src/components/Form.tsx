import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  description: z.string().min(1, "This field is required"),
  amount: z.number({ invalid_type_error: "This field is required" }),
  categories: z.string().min(1, "This field is required"),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const [newEntry, setNewEntry] = useState<FormData[]>([]);
  const [filterList, setFilterList] = useState("all");

  const onSubmit = (data: FormData) => {
    setNewEntry([...newEntry, data]);
    reset();
  };

  const handleDelete = (index: number) => {
    setNewEntry(newEntry.filter((_, i) => i !== index));
  };

  const filteredEntries =
    filterList === "all"
      ? newEntry
      : newEntry.filter((entry) => entry.categories === filterList);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="categories" className="form-label">
          Categories
        </label>
        <select
          className="form-select"
          {...register("categories")}
          id="categories"
        >
          <option value=""></option>
          <option value="Groceries">Groceries</option>
          <option value="Utilities">Utilities</option>
          <option value="Entertainment">Entertainment</option>
        </select>
        {errors.categories && (
          <p className="text-danger">{errors.categories.message}</p>
        )}
      </div>
      <button className="btn btn-primary mb-3" type="submit">
        Submit
      </button>

      <select
        className="form-select mb-3"
        id="filter"
        value={filterList}
        onChange={(e) => setFilterList(e.target.value)}
      >
        <option value="all">All Categories</option>
        {[...new Set(newEntry.map((entry) => entry.categories))].map(
          (category) => (
            <option key={category} value={category}>
              {category}
            </option>
          )
        )}
      </select>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Amount</th>
            <th scope="col">Category</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {filteredEntries.map((entry, index) => (
            <tr key={entry.description}>
              <td>{entry.description}</td>
              <td>${entry.amount}.00</td>
              <td>{entry.categories}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </form>
  );
};

export default Form;
