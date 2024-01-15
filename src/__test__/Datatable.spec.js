// DataTable.spec.js
import { mount } from '@vue/test-utils';
import DataTable from "../components/DataTable.vue";
import expect from "expect";

describe('Datatable.vue', () => {

  /**
   * Test Data
   * @type {[{name: string, url: string},{name: string, url: string},{name: string, url: string}]}
   */
  const rows = [
    {
      "name": "bulbasaur",
      "url": "https://pokeapi.co/api/v2/pokemon/1/"
    },
    {
      "name": "ivysaur",
      "url": "https://pokeapi.co/api/v2/pokemon/2/"
    },
    {
      "name": "venusaur",
      "url": "https://pokeapi.co/api/v2/pokemon/3/"
    }
  ];

  /**
   * Table Headings
   * @type {[{label: string, key: string},{label: string, key: string}]}
   */
  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'url', label: 'URL' },
  ];

  /**
   * Define Props of the Datatable component
   * @type {{columns: [{label: string, key: string},{label: string, key: string}], rows: [{name: string, url: string},{name: string, url: string},{name: string, url: string}]}}
   */
  const data = {
    rows:rows,
    columns: columns,
  }

  it('Renders DataTable with provided rows and columns', () => {

    /**
     * Mount Component with props
     * @type {VueWrapper<ComponentProps<{methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends (((...args: any) => any) | {new(...args: any): any}) ? {methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} : ({methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends {props?: infer Props} ? DefineComponent<Props extends (Readonly<infer PropNames[]> | infer PropNames[]) ? {[key in PropNames extends string ? PropNames : string]?: any} : Props> : DefineComponent)> & ComponentData<{methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends (((...args: any) => any) | {new(...args: any): any}) ? {methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} : ({methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends {props?: infer Props} ? DefineComponent<Props extends (Readonly<infer PropNames[]> | infer PropNames[]) ? {[key in PropNames extends string ? PropNames : string]?: any} : Props> : DefineComponent)> & ComponentExposed<{methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends (((...args: any) => any) | {new(...args: any): any}) ? {methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} : ({methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends {props?: infer Props} ? DefineComponent<Props extends (Readonly<infer PropNames[]> | infer PropNames[]) ? {[key in PropNames extends string ? PropNames : string]?: any} : Props> : DefineComponent)>, ComponentPublicInstance<ComponentProps<{methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends (((...args: any) => any) | {new(...args: any): any}) ? {methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} : ({methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends {props?: infer Props} ? DefineComponent<Props extends (Readonly<infer PropNames[]> | infer PropNames[]) ? {[key in PropNames extends string ? PropNames : string]?: any} : Props> : DefineComponent)>, ComponentData<{methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends (((...args: any) => any) | {new(...args: any): any}) ? {methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} : ({methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends {props?: infer Props} ? DefineComponent<Props extends (Readonly<infer PropNames[]> | infer PropNames[]) ? {[key in PropNames extends string ? PropNames : string]?: any} : Props> : DefineComponent)> & ComponentExposed<{methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends (((...args: any) => any) | {new(...args: any): any}) ? {methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} : ({methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends {props?: infer Props} ? DefineComponent<Props extends (Readonly<infer PropNames[]> | infer PropNames[]) ? {[key in PropNames extends string ? PropNames : string]?: any} : Props> : DefineComponent)> & Omit<{columns: [{label: string, key: string},{label: string, key: string}], rows: [{name: string, url: string},{name: string, url: string},{name: string, url: string}]}, keyof ComponentProps<{methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends (((...args: any) => any) | {new(...args: any): any}) ? {methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} : ({methods: {performAction(*, *): void}, name: string, props: {columns: {type: Array | ArrayConstructor, required: boolean}, rows: {type: Array | ArrayConstructor, required: boolean}, actions: {default: function(): [], type: Array | ArrayConstructor}}} extends {props?: infer Props} ? DefineComponent<Props extends (Readonly<infer PropNames[]> | infer PropNames[]) ? {[key in PropNames extends string ? PropNames : string]?: any} : Props> : DefineComponent)>>>>}
     */
    const wrapper = mount(DataTable,{ propsData: data});

    /**
     *  Assert that DataTable renders correctly
     */
    expect(wrapper.find('.datatable').exists()).toBe(true);

    /**
     * Assert that header and rows are rendered
     */
    expect(wrapper.findAll('.datatable thead th')).toHaveLength(data.columns.length);
    expect(wrapper.findAll('.datatable tbody tr')).toHaveLength(data.rows.length);
  });

  /**
   * Verify First Row
   */
  it('Verify first row', async () => {

    const wrapper = mount(DataTable,{ propsData: data});
    const firstRow = wrapper.find('.datatable tbody tr')
    expect(firstRow.find('td:nth-child(1)').text()).toBe(data.rows[0].name);
    expect(firstRow.find('td:nth-child(2)').text()).toBe(data.rows[0].url);
  });

});
