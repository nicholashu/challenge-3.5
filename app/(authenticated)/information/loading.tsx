import { Skeleton } from "@/components/ui/skeleton";

export default function InformationLoading() {
  return (
    <div className="p-4 space-y-6">
      <Skeleton className="h-7 w-48" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col gap-6 rounded-xl border bg-transparent py-6 shadow-sm"
          >
            <div className="px-6">
              <div className="flex items-center gap-2">
                <Skeleton className="h-16 w-16 rounded-full" />
                <Skeleton className="h-5 flex-1" />
              </div>
            </div>
            <div className="px-6 space-y-2">
              <div className="flex justify-between gap-2">
                <Skeleton className="h-3 w-16" />
                <Skeleton className="h-3 flex-1" />
              </div>
              <div className="flex justify-between gap-2">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 flex-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
