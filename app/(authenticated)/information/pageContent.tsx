"use client";

import { useMemo, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";
import CharacterCard from "@/components/CharacterCard";
import CharacterModal from "@/components/CharacterModal";
import type { RickData } from "@/types/api";

type InformationPageContentProps = {
  initialData: RickData;
  page?: number;
};

const ITEMS_PER_PAGE = 20;

function PaginationLinks({
  currentPage,
  totalPages,
  basePath,
}: {
  currentPage: number;
  totalPages: number;
  basePath: string;
}) {
  const pages: (number | null)[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1);
    if (currentPage > 3) {
      pages.push(null);
    }
    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - 2) {
      pages.push(null);
    }
    pages.push(totalPages);
  }

  return (
    <>
      {currentPage > 1 && (
        <PaginationItem>
          <PaginationPrevious href={`${basePath}/${currentPage - 1}`} />
        </PaginationItem>
      )}

      {pages.map((page, idx) =>
        page === null ? (
          <PaginationItem key={`ellipsis-${idx}`}>
            <PaginationEllipsis />
          </PaginationItem>
        ) : (
          <PaginationItem key={page}>
            <PaginationLink
              href={`${basePath}/${page}`}
              isActive={page === currentPage}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        )
      )}

      {currentPage < totalPages && (
        <PaginationItem>
          <PaginationNext href={`${basePath}/${currentPage + 1}`} />
        </PaginationItem>
      )}
    </>
  );
}

const InformationPageContent = ({
  initialData,
  page = 1,
}: InformationPageContentProps) => {
  const [activeCharacterId, setActiveCharacterId] = useState<string | null>(null);

  const characters = initialData.characters.results;
  const totalCount = initialData.characters.info.count;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

  const onCardClick = (characterId: string) => {
    setActiveCharacterId(characterId === activeCharacterId ? null : characterId);
  };

  const activeCharacter = useMemo(
    () =>
      characters.find((char) => char.id === activeCharacterId) || null,
    [activeCharacterId, characters]
  );

  return (
    <div className="p-4 space-y-6">
      <CharacterModal
        character={activeCharacter}
        isOpen={!!activeCharacter}
        onClose={() => setActiveCharacterId(null)}
      />
      <div>
        <h1 className="text-2xl font-bold mb-2">Rick Characters</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} onClick={onCardClick} />
        ))}
      </div>

      <Pagination>
        <PaginationContent>
          <PaginationLinks
            currentPage={page}
            totalPages={totalPages}
            basePath="/information"
          />
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default InformationPageContent;
