import { SyncOutlined } from "@ant-design/icons";
const AuthForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  secret,
  setSecret,
  loading,
  page,
}) => (
  <form onSubmit={handleSubmit}>
    {page !== "login" && (
      <div className="form-group p-2">
        <small>
          <label className="text-muted"> Name</label>
        </small>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          className="form-control"
          placeholder="Enter name"
        />
      </div>
    )}
    <div className="form-group p-2">
      <small>
        <label className="text-muted">Email Address</label>
      </small>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        className="form-control"
        placeholder="Enter Email"
      />
    </div>
    <div className="form-group p-2">
      <small>
        <label className="text-muted">Password</label>
      </small>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        className="form-control"
        placeholder="Enter Password"
      />
    </div>
    {page !== "login" && (
      <>
        <div className="form-group p-2">
          <small>
            <label className="text-muted">Choose a question</label>
          </small>
          <select className="form-control">
            <option>What is your favorite color?</option>
            <option>What is your best friend name?</option>
            <option>What is your place of birth?</option>
          </select>
          <small className="form-text text-muted">
            You can use this to reset your password if forgotten.
          </small>
        </div>
        <div className="form-group p-2">
          <input
            value={secret}
            onChange={(e) => setSecret(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Write your answer here."
          />
        </div>
      </>
    )}
    <div className="form-group p-2">
      <button
        disabled={
          page === "login"
            ? !email || !password || loading
            : !name || !email || !password || !secret || loading
        }
        className="btn btn-primary col-12"
      >
        {loading ? <SyncOutlined spin clasName="py-1" /> : "Submit"}
      </button>
    </div>
  </form>
);

export default AuthForm;
