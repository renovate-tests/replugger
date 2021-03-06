import React, { PureComponent } from 'react';
import { slot, renderTo, RenderSlot } from 'replugger';

import { MY_SLOT, FOOTER } from '../constants/slots';

@slot
class Slot extends PureComponent {
  @renderTo(FOOTER)
  render() {
    return (
      <div>
        <p>Copyright by <strong>replugger</strong></p>
        <div style={{ border: '2px dotted red' }}>
          <span>{'The slot named "MY_SLOT" was created by Plugin "Bar"'}</span>

          <RenderSlot name={MY_SLOT} />
        </div>
      </div>
    );
  }
}

export default Slot;
