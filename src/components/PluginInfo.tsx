import React from 'react';

type PluginInfoProps = {
  need: number;
  priority: number;
}

export const PluginInfo = ({ need, priority }: PluginInfoProps) => {

  const Stars = ({ num }) => {
    return (
      <>{"★".repeat(num)}{"☆".repeat(5 - num)}</>
    )
  }

  return (
    <>
      <div style={{ display: 'flex', padding: 8 }}>
        <h3>
          欲しい度
        </h3>
        <h3 style={{ marginLeft: 8, color: '#F7B300' }}>
          <Stars num={need} />
        </h3>
      </div>
      <div style={{ display: 'flex', padding: 8 }}>
        <h3>
          優先度
        </h3>
        <h3 style={{ marginLeft: 8, color: '#F7B300' }}>
          <Stars num={priority} />
        </h3>
      </div>
    </>
  )
}
