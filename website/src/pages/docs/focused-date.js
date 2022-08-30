import React, { useState } from 'react';
import { Calendar } from 'react-modern-calendar-datepicker';

import Docs from '../../containers/docs';
import { Code } from '../../components';

const FocusedDate = () => {
  const [selectedDay, setSelectedDay] = useState(null);

  return (
    <Docs title="Focused Date">
      <p>
        There are many cases where you want to initialize your calendar with a
        specific focused date. That&#39;s when{' '}
        <code className="custom-code">focusedDate</code> prop comes in handy.
        Here is an example:
      </p>

      <h2 className="Docs__titleSecondary">Focus a Past Date</h2>

      <div className="Docs__sampleContainer">
        <Code language="javascript">
          {`
import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      focusedDate={{ year: 2013, month: 4 }}
    />
  );
};

export default App;

          `}
        </Code>
        <Calendar
          calendarClassName="fontWrapper"
          value={selectedDay}
          onChange={setSelectedDay}
          focusedDate={{ year: 2013, month: 4 }}
        />
      </div>
    </Docs>
  );
};

export default FocusedDate;
