import { Component, OnInit } from '@angular/core';
import { DataTableConfig } from 
'../../../../../core/framework/material-custom-components/data-table/data-table-config';
import { Attribute } from '../../models/attribute';


/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'attribute-list',
  templateUrl: './attribute-list.component.html',
  styleUrls: ['./attribute-list.component.scss']
})
export class AttributeListComponent implements OnInit {

  private attributes: Attribute[] = [];
  private columns: any[] = [];

  private tableConfig: DataTableConfig;

  constructor() {}

  ngOnInit() {
    this.attributes = Array.from({length: 100}, (_, k) => createNewAttribute(k + 1));
    this.columns = this.getColumns();

    this.tableConfig = {
        data: this.attributes,
        tableTitle: 'Attributes',
        columns: this.columns,
        topToolbar: [
                    {
                      type: 'button', 
                      name: 'Delete Attribute',
                      icon: 'delete'
                    },
                    { 
                      type: 'anchor', 
                      name: 'Add Attribute', 
                      href: '/catalog/add/attribute',
                      icon: 'note_add' 
                    }
                   ],
        inlineToolbar: [{ 
                          type: 'anchor', 
                          name: 'Edit', 
                          href: '/catalog/edit/attribute',
                          icon: 'edit' 
                        }]             
      } 

  }
  
  private getColumns(): string[] {
    const columns: any[] = [];
    columns.push({ columnDef: 'select'});
    for (const key of Object.keys(this.attributes[0])) {
         columns.push({ columnDef: key, header: key.toLocaleUpperCase(),
           dataName: function(row) {return row[this.columnDef];} });
    }
    columns.push({ columnDef: 'actions', header: 'ACTIONS',
      dataName: function(row) {return row[this.columnDef];}});
    return columns;
  }

  deleteObject(attributeId) {
    console.log('Attribute, deleteObject, id: ', attributeId);
  }
}

/** Builds and returns a new Attribute. */
function createNewAttribute(id: number): Attribute {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
  const av = ['Red', 'Blue', 'Green', 'Yellow'];    

  return {
    id: id.toString(),
    name: name,
    sortOrder: id,
    attributeValue: av,
    children: ['attributeValue'],
    objectTypeId: 'Attribute1000'
  };
}
