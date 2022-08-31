import React, { useState } from 'react';
import { Calendar } from '@ornikar/react-modern-calendar-datepicker';

import Docs from '../../containers/docs';
import { Code } from '../../components';

const DisabledDays = () => {
  const [datePicker1Value, setDatePicker1Value] = useState({ year: 2019, month: 3, day: 12 });
  const [datePicker2Value, setDatePicker2Value] = useState({
    from: {
      year: 2019,
      month: 3,
      day: 12,
    },
    to: {
      year: 2019,
      month: 3,
      day: 15,
    }
  });
  const disabledDatePicker1Days = [
    {
      year: 2019,
      month: 3,
      day: 20,
    },
    {
      year: 2019,
      month: 3,
      day: 21,
    },
    {
      year: 2019,
      month: 3,
      day: 7,
    }
  ];
  const disabledDatePicker2Days = [
    {
      year: 2019,
      month: 3,
      day: 22,
    },
    {
      year: 2019,
      month: 3,
      day: 25,
    },
    {
      year: 2019,
      month: 3,
      day: 6,
    }
  ];

  return (
    <Docs title="Disabled Day(s)">
      <p>
        Sometimes, you need to disallow user to select some specific
        days. <code className="custom-code">disabledDays</code> prop
        takes an array of desired disabled days:
      </p>

      <Code language="javascript">
        {`
PropTypes.arrayOf(PropTypes.shape({
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  day: PropTypes.number.isRequired,
}))
        `}
      </Code>
      <p>
        By passing disabled days, users won&#39;t be able to select a disabled day
        or include one in a range. At such times, <code className="custom-code">onDisabledDayError</code>
        function will get called, and you can show a message to the users.
      </p>

      <h2 className="Docs__titleSecondary">Examples</h2>

      <div className="Docs__sampleContainer">
        <Code language="javascript">
          {`
import React, { useState } from "react";
import "@ornikar/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@ornikar/react-modern-calendar-datepicker";

const App = () => {
  const defaultValue = {
    year: 2019,
    month: 3,
    day: 12,
  };

  const disabledDays = [
    {
      year: 2019,
      month: 3,
      day: 20,
    },
    {
      year: 2019,
      month: 3,
      day: 21,
    },
    {
      year: 2019,
      month: 3,
      day: 7,
    }
  ];

  const [selectedDay, setSelectedDay] = useState(defaultValue);

  const handleDisabledSelect = disabledDay => {
    console.log('Tried selecting a disabled day', disabledDay);
  };

  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      disabledDays={disabledDays} // here we pass them
      onDisabledDayError={handleDisabledSelect} // handle error
      shouldHighlightWeekends
    />
  );
};

export default App;

          `}
        </Code>
        <Calendar
          calendarClassName="fontWrapper"
          value={datePicker1Value}
          onChange={setDatePicker1Value}
          disabledDays={disabledDatePicker1Days}
          shouldHighlightWeekends
        />
      </div>

      <div className="Docs__sampleContainer">
        <Code language="javascript">
          {`
import React, { useState } from "react";
import "@ornikar/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@ornikar/react-modern-calendar-datepicker";

const App = () => {
  const defaultFrom = {
    year: 2019,
    month: 3,
    day: 12,
  };
  const defaultTo = {
    year: 2019,
    month: 3,
    day: 15,
  };

  const disabledDays = [
    {
      year: 2019,
      month: 3,
      day: 22,
    },
    {
      year: 2019,
      month: 3,
      day: 25,
    },
    {
      year: 2019,
      month: 3,
      day: 6,
    }
  ];

  const [selectedDayRange, setSelectedDayRange] = useState({
    from: defaultFrom,
    to: defaultTo,
  });

  const handleDisabledSelect = disabledDay => {
    console.log('Tried including a disabled day', disabledDay);
  };

  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      disabledDays={disabledDays} // here we pass them
      onDisabledDayError={handleDisabledSelect} // handle error
      shouldHighlightWeekends
    />
  );
};

export default App;

          `}
        </Code>
        <Calendar
          calendarClassName="fontWrapper"
          value={datePicker2Value}
          onChange={setDatePicker2Value}
          disabledDays={disabledDatePicker2Days}
          shouldHighlightWeekends
        />
      </div>
    </Docs>
  );
};

export default DisabledDays;
