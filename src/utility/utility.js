import{
    CpuChipIcon,
    CodeBracketIcon,
    MicrophoneIcon,
    MusicalNoteIcon,
    PuzzlePieceIcon,
    VideoCameraIcon
} from '@heroicons/react/20/solid'

export const categories =[
    {name :'Coding' , icon: <CodeBracketIcon className='h-5 sm:h-8' />},
    {name : 'Tech', icon : <CpuChipIcon className='h-5 sm:h-8'  />},
    {name : 'Music', icon : <MusicalNoteIcon className='h-5 sm:h-8'  />},
    {name : 'Podcast', icon : <MicrophoneIcon className='h-5 sm:h-8'  />},
    {name : 'Gaming', icon : <PuzzlePieceIcon className='h-5 sm:h-8'  />},
    {name : 'Live', icon : <VideoCameraIcon className='h-5 sm:h-8'  />},

];

export const logo = 'https://i.ibb.co/BN4Y0Wt/youtube.png'