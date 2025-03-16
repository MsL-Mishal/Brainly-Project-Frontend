import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { CreateContentModal } from '../components/ui/CreateContentModal'
import { PlusIcon } from '../icons/PlusIcon'
import { ShareIcon } from '../icons/ShareIcon'
import { Sidebar } from '../components/ui/Sidebar'

function Dashboard() {

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className='flex justify-between bg-gray-200'>

        <Sidebar />
        
        <div className='bg-gray-200 h-screen w-full p-2 border-2'>
          <div className='flex justify-end gap-4 py-2 px-2'>
            <Button 
              variant='primary' 
              size='md' 
              content='Add Content' 
              startIcon={<PlusIcon size='md' />} 
              onClick={ () => setModalOpen(true)}
            />

            <Button 
              variant='secondary' 
              size='md' 
              content='Share Brain' 
              startIcon={<ShareIcon size='md' />} 
            />
          </div>

          <div className='flex justify-around align-top gap-4 py-4'>
            <Card 
              type='Article' 
              title='Title Goes Here' 
              date='01/01/2021' 
              link='https://www.google.com'
              content='Content goes here'
            />

            <Card
              type='Video'
              title='96 Songs'
              date='03/01/2021'
              link='https://www.youtube.com/embed/KZZLqoRuuHw?si=bPPJqzfT-ZRD_cey'
            />
            
            <Card
              type='Twitter'
              title='Coding Post'
              date='03/01/2024'
              link='https://twitter.com/minku_singh23/status/1900733202576404822?ref_src=twsrc%5Etfw'
            />
          </div>

          <CreateContentModal modalOpen={ modalOpen } onClose={ () => setModalOpen(false) } />
        </div>
        
      </div>
    </>
  )
}

export default Dashboard