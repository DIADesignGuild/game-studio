import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="About" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        This is an open source Taiwanese Mahjong Calculator, heavily inspired by{' '}
        <a
          href="https://mahjong-handle.update.sh/"
          className="underline font-bold"
        >
          Mahjong Handle
        </a>{' '}
        -{' '}
        <a
          href="https://github.com/DIADesignGuild/game-studio/tree/main/Projects/P04%20-%20Mahjong2022"
          className="underline font-bold"
        >
          check out the code here
        </a>
      </p>
    </BaseModal>
  )
}
