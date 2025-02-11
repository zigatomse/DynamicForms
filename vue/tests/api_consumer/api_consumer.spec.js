import APIConsumerLogic from '../../components/api_consumer/api_consumer_logic';

import * as mockComponentDef from './api_consumer_table_componentdef.json';

jest.mock('axios', () => {
  const res = {
    get: async (url) => {
      if (url.includes('failure')) throw Error('Refusing to return definition');
      return { data: mockComponentDef };
    },
    create: () => res,
    interceptors: {
      request: { use: jest.fn(), eject: jest.fn() },
      response: { use: jest.fn(), eject: jest.fn() },
    },
  };
  return res;
});

describe('APIConsumerLogic', () => {
  it('fails to load data from a bad url', async () => {
    const apiConsumer = new APIConsumerLogic('failure');
    await expect(apiConsumer.getFullDefinition()).rejects.toThrowError('Refusing to return definition');
  });
  it('loads the data and composes the fields, tableColumns collections', async () => {
    const apiConsumer = new APIConsumerLogic('/hidden-fields');
    await apiConsumer.getFullDefinition();
    const allProps = [
      'id', 'df_control_data', 'df_prev_id', 'row_css_style', 'note', 'unit', 'int_fld', 'qty_fld',
      'cst_fld', 'additional_text', '#actions-row_end',
    ];
    expect(Object.keys(apiConsumer.fields).sort()).toEqual(allProps.sort());
    expect(apiConsumer.tableColumns.map((col) => col.name).sort()).toEqual(allProps.sort());
  });
});
