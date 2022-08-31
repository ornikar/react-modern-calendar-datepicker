import React, { useState } from 'react';
import { Calendar } from '@ornikar/react-modern-calendar-datepicker';

import Docs from '../../containers/docs';
import { Code } from '../../components';

const DefaultValues = () => {
  const [datePicker1Value, setDatePicker1Value] = useState(null);

  return (
    <Docs title="Responsive Guide">
      <p>
        By default, the calendar element has a fixed size. If you want to use a larger/smaller
        calendar, you need to change the <code className="custom-code">font-size</code> of it!
        Because of the usage of CSS relative units in calendar styles, all the children of it will
        correspond correctly. To change the font size of the calendar, you
        can set a custom class on the calendar.
        Here&#39;s an example:(resize the page to see the effect)
      </p>

      <div className="Docs__sampleContainer">
        <Code language="javascript">
          {`
import React, { useState } from "react";
import "@ornikar/react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "@ornikar/react-modern-calendar-datepicker";

const App = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      calendarClassName="responsive-calendar" // added this
      shouldHighlightWeekends
    />
  );
};

export default App;

          `}
        </Code>
        <Calendar
          calendarClassName="fontWrapper responsive-calendar"
          value={datePicker1Value}
          onChange={setDatePicker1Value}
          shouldHighlightWeekends
        />
      </div>

      <p>
        Keep in mind to use <code className="custom-code">px</code> as your unit for the font size.
        CSS code:
      </p>

      <Code language="css">
        {`
.responsive-calendar {
  /* by setting font-size, all the elements will correspond */
  font-size: 9px !important; /* default to 10px */
}

@media (max-width: 1500px) {
  .responsive-calendar {
    font-size: 8px !important;
  }
}

@media (max-width: 1200px) {
  .responsive-calendar {
    font-size: 7px !important;
  }
}

@media (max-width: 768px) {
  .responsive-calendar {
    font-size: 6px !important;
  }
}

/* Large screens */
@media (min-width: 2500px) {
  .responsive-calendar {
    font-size: 12px !important;
  }
}
        `}
      </Code>
    </Docs>
  );
};

export default DefaultValues;
