import { CounterApp } from "../components/Counter/Counter";
import { INITIAL_COUNTER } from "../helpers/Counter";

export const Counter = () => {
  return (
    <>
    <h1>My Counter App</h1>
      <div style={{ display: "flex", flex: "row", gap: "100px" }}>
        <div>
          <CounterApp
            title={"Counter 1"}
            value={INITIAL_COUNTER}
            hasButtonReset={false}
          />
        </div>
        <div>
          <CounterApp
            title={"Counter 2"}
            value={INITIAL_COUNTER}
            hasButtonReset={true}
          />
        </div>
      </div>
    </>
  );
};
