import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import {
  Avatar,
  AvatarImage,
} from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import type { Character } from "@/types/character";

type CharacterModalProps = {
  character: Character | null;
  isOpen: boolean;
  onClose: () => void;
};

const getStatusColor = (status: string): string => {
  switch (status.toLowerCase()) {
    case "alive":
      return "bg-green-500";
    case "dead":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const formatDate = (dateString: string): string => {
  return new Date(dateString).toLocaleDateString("en-AU", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const CharacterModal = ({
  character,
  isOpen,
  onClose,
}: CharacterModalProps) => {
  if (!character) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogTitle className="sr-only">{character.name}</DialogTitle>
        <DialogHeader className="flex flex-col items-center space-y-4">
          <div className="relative">
            <Avatar className="h-32 w-32">
              <AvatarImage src={character.image} alt={character.name} />
            </Avatar>
            <div
              className={`absolute bottom-1 right-1 size-5 rounded-full border-2 border-background ${getStatusColor(
                character.status
              )}`}
              title={character.status}
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold">{character.name}</h2>
            <p className="text-muted-foreground text-sm">ID: {character.id}</p>
          </div>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary">{character.status}</Badge>
            <Badge variant="outline">{character.species}</Badge>
            <Badge variant="outline">{character.gender}</Badge>
          </div>
          {character.type && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Type</p>
              <p className="text-sm font-medium">{character.type}</p>
            </div>
          )}
          <Separator />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Episodes
              </p>
              <p className="text-sm font-medium">{character.episode.length}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Created
              </p>
              <p className="text-sm font-medium">{formatDate(character.created)}</p>
            </div>
          </div>
          <Separator />
          <div className="space-y-3">
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Origin
              </p>
              <p className="text-sm font-medium">{character.origin.name}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground uppercase tracking-wide">
                Location
              </p>
              <p className="text-sm font-medium">{character.location.name}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CharacterModal;
