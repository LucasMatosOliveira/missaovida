
import { DataTable } from '@/components/data-table'
import { User, columns } from '@/components/Form/Grid/columns'
import { useEffect, useState } from 'react'

export async function getUsers(): Promise<User[]> {
  const res = await fetch(
    'https://64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users'
  )
  const data = await res.json()
  return data
}

function App() {
  const [userData, setUserData] = useState<User[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getUsers();
      setUserData(data);
    }
    fetchData();
  }, []);

  return (    
    <section className='py-24 bg-dark '>
      <div className='container bg-white'>
        <DataTable columns={columns} data={userData} />
      </div>
    </section>
  )
}

export default App
