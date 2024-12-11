import React, { useEffect } from 'react';
import { Tabulator } from 'tabulator-tables';
import "tabulator-tables/dist/css/tabulator.min.css"; // Import Tabulator CSS

const Table = ({tasks}) => {
    

    useEffect(() => {
        // Create Tabulator on DOM element with id "example-table"
        var table = new Tabulator("#example-table", {            
            data: tasks, 
            layout: "fitData",    
            resizableRows:true,
    resizableRowGuide:true,
    resizableColumnGuide:true,
    columnDefaults:{
        resizable:true,
    },
            columns: [                  // Define columns explicitly
                { field: "id", title: "Id", minWidth:150   },  
                { field: "title", title: "Title",},  
                { field: "description", title: "Description", },  
                { field: "status", title: "Status", minWidth:150 }
            ],
            
        });        
        
    }, []); // Empty dependency array ensures this runs once when the component mounts

    return (
        <div id="example-table" style={{ width: '100%', height: '400px', overflowY:'"auto"' }}></div>
    );
}

export default Table;
