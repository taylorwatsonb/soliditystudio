import { memo } from 'react';

export const nodeTypes = {
  function: memo(({ data }: any) => (
    <div className="px-4 py-2 shadow-lg rounded-lg bg-gray-800 border border-cyan-500">
      <div className="text-white font-mono">
        <div className="text-cyan-400">{data.label}</div>
        {data.inputs?.length > 0 && (
          <div className="text-sm text-gray-400">
            Inputs: {data.inputs.join(', ')}
          </div>
        )}
        {data.outputs?.length > 0 && (
          <div className="text-sm text-gray-400">
            Outputs: {data.outputs.join(', ')}
          </div>
        )}
      </div>
    </div>
  )),
};