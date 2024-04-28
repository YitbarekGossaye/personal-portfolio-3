import { lineBreak } from "../utilits";
import Counter from "./Counter";

const counterData = [
  { smallVlaue: true, value: 75000, name: "Lines Of\nCodes" },
  { smallVlaue: true, value: 15, name: "Projects" },
  { smallVlaue: false, value: 5, name: "Problems \nSolved" },
];
const CounterSection = () => {
  return (
    <div className="devman_tm_section">
      <div className="devman_tm_counter_section">
        <div className="container">
          <div className="counter_list">
            <ul>
              {counterData.map((counter, i) => (
                <li key={i}>
                  <div className="list_inner">
                    <div className="wrapper">
                      <div className="value">
                        <span className="abs">
                          <Counter end={counter.value} />
                          {counter.smallVlaue ? (
                            <label className="small">+</label>
                          ) : (
                            <label className="big">+</label>
                          )}
                        </span>
                      </div>
                      <div className="text">
                        <h3
                          dangerouslySetInnerHTML={lineBreak(counter.name)}
                        ></h3>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CounterSection;
