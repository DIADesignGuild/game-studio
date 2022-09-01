import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => { 
  // TODO: add animation/slideshow of what it will look like with(out) hand indicator
  // TODO: add demonstration of what it looks like when a tile is chosen as the winning tile
  return (
    <BaseModal title="How to use" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Use the keyboard to type in your hand in order to calculate how many points it is worth!
      </p>

      <div className="flex justify-center mb-1 mt-4"> 
        <Cell value="🀇" />
        <Cell value="🀈" />
        <Cell value="🀉" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        In each triplet, there will be a hand next to it. 
        <br />
        You may click it to indicate whether that set is open or closed.
        <br />
        There will also be a checkbox to convert a set to a kan. 
      </p>
      
      <div className="flex justify-center mb-1 mt-4"> 
        <Cell value="🀖" />
        <Cell value="🀗" status="cursor" />
        <Cell value="🀘" />
      </div>
      <p className="text-sm text-green-700 dark:text-green-500">
        Please indicate the winning tile by clicking and holding the tile after typing it in. This can be done before or after typing out the entire hand.
        <br />
        The border will change color to indicate that it is selected. This can be reverted by repeating the click and hold.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🀇" />
        <Cell value="🀈" />
        <Cell value="🀉" />
        <Cell value="🀜" />
        <Cell value="🀝" />
        <Cell value="🀞" />
        <Cell value="🀔" />
        <Cell value="🀖" />
        <Cell value="🀗" />
        <Cell value="🀘" />
        <Cell value="🀅" status="absent" />
        <Cell value="🀅" status="absent" />
        <Cell value="🀅" status="absent" />
        <Cell value="🀔" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The tile 6z is not in the hand in any spot.
      </p>

      <p className="text-sm text-gray-500 dark:text-gray-300">
        You can also use keyboard shortcuts to enter tiles. For example, you can
        enter the tiles above by typing{' '}
        <span className="font-mono">123m456p5789s666z5s</span> on your keyboard.
      </p>
    </BaseModal>
  )
}
