import type { Character } from "@/types/character";
import {
  ClickableCard,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar";


type CharacterCardProps = {
  character: Character;
  onClick: (id: string) => void;
};

const CharacterCard = ({ character, onClick }: CharacterCardProps) => {
  return (
    <ClickableCard
      className="h-full"
      onClick={() => onClick(character.id)}
    >
      <CardHeader>
        <div className="flex items-center gap-2">
          <Avatar className="h-16 w-16">
            <AvatarImage src={character.image} alt={character.name} />
          </Avatar>
          <CardTitle className="text-sm line-clamp-1">
            {character.name}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="space-y-0.5 text-xs mt-auto">
          <div className="flex justify-between gap-2">
            <span className="text-muted-foreground">Origin:</span>
            <span className="truncate text-right max-w-30" title={character.origin.name}>
              {character.origin.name}
            </span>
          </div>
          <div className="flex justify-between gap-2">
            <span className="text-muted-foreground">Location:</span>
            <span className="truncate text-right max-w-30" title={character.location.name}>
              {character.location.name}
            </span>
          </div>
        </div>
      </CardContent>
    </ClickableCard>
  );
}
export default CharacterCard;