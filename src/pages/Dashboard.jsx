import { useState } from 'react'
import dashboardIcon from '../assets/dashboardIcon.svg'
import profileIcon from '../assets/profileIcon.svg'
import cyberEnhancementIcon from '../assets/cyberEnchancementIcon.svg'
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  Filler,
  CategoryScale,
  LinearScale,
  Title,
} from 'chart.js';
import { PolarArea, Radar, Line } from 'react-chartjs-2';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import '../CSS/Dashboard.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'Transaction Id',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Amount',
    width: 110,
    editable: true,
  },
  {
    field: 'Name',
    headerName: 'Payment Gateway',
    width: 160,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Payee',
    description: 'This column has a value getter and is not sortable.',
    editable: true,
    width: 160,
  },
  {
    field: 'pending',
    headerName: 'Payment Status',
    width: 120,
    editable: true,
  }
];

const rows = [
  { id: 1, fullName: 'Snow', lastName: '₹40000', firstName: "TR87432984732", Name: "Google Pay", pending: "Complete" },
  { id: 2, fullName: 'Lannister', lastName: '₹40000', firstName: "TR87432984732", Name: "Bitcoin", pending: "Complete" },
  { id: 3, fullName: 'Lannister', lastName: '₹40000', firstName: "TR87432984732", Name: "Google Pay", pending: "Pending" },
  { id: 4, fullName: 'Stark', lastName: '₹40000', firstName: "TR87432984732", Name: "Google Pay", pending: "Complete" },
  { id: 5, fullName: 'Targaryen', lastName: '₹40000', firstName: "TR87432984732", Name: "Phone Pe", pending: "Complete" },
  { id: 6, fullName: 'Melisandre', lastName: '₹40000', firstName: "TR87432984732", Name: "Google Pay", pending: "Pending" },
  { id: 7, fullName: 'Clifford', lastName: '₹40000', firstName: "TR87432984732", Name: "Google Pay", pending: "Complete" },
  { id: 8, fullName: 'Frances', lastName: '₹40000', firstName: "TR87432984732", Name: "Google Pay", pending: "Complete" },
  { id: 9, fullName: 'Roxie', lastName: '₹40000', firstName: "TR87432984732", Name: "Google Pay", pending: "Pending" },
];

function DataGridDemo() {
  return (
    <Box sx={{ height: 400, width: 850 }}>
      <DataGrid
        rows={rows}

        style={{color: 'white'}}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
function App() {
  return (
    <>
      <Sidebar />
      <Dashboard />
    </>
  )

  function Sidebar(){
    const sidebarData = [
      {
      text: "Dashboard",
      image: dashboardIcon
      },
      {
        text: "Profile",
        image: profileIcon
      },
      {
        text: "Cyber Enhancement",
        image: cyberEnhancementIcon
      }
  ]
    return(
      <aside>
      {sidebarData.map((data, index)=>{
        return(
        <div className='sidebar-elements' key={index} >
          <p onClick={()=>sidebarClick(index)}>
            <img src={data.image} />
            <span>{data.text}</span>
            </p>
        </div>
        )
      })}
    </aside>
    )
  }
}

function Dashboard(){
  ChartJS.register(
    CategoryScale,
    RadialLinearScale,
    ArcElement,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    
  );
  const data_polar = {
    labels: [
      'GooglePay',
      'PhonePe',
      'Ethereum',
      'Bitcoin',
      'Solana'
    ],
    datasets: [{
      label: 'My First Dataset',
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        'rgb(6, 115, 225)',
        'rgb(223, 74, 255)',
        'rgb(255, 205, 86)',
        'rgb(14, 161, 243)',
        'rgb(54, 162, 235)'
      ]
    }]
  }
  const data_radar = {
    labels: [
      'Instagram',
      'Facebook',
      'Tiktok',
      'Twitter',
      'Youtube',
      'Whatsapp',
      'LinkedIn'
    ],
    datasets: [{
      label: 'Shashank Gupta',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Pranav Patil',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  }
  return(
    <>
    <p style={{
        color: 'white',
        fontSize: '30px',
        margin: '20px 0 0 390px'
      }}>Hello, John Smilga</p>
    <main id="nnn">
      
      <div id='polarArea-chart'>
        <PolarArea data={data_polar}/>
      </div>
      <div id='radar-chart'>
      <Radar data={data_radar} />
      </div>
      <DataGridDemo />
    </main>
    </>
  )
}

export default App