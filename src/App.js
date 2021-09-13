import React, { useRef, useEffect } from "react";
import { mount } from 'mfe-remote/index.js';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div>
      <h1>MFE Consumer</h1>
      <hr />
      <div ref={ref} />
    </div>
  )
}