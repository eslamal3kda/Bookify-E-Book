import React from "react";

export default function BookCardSkeletonLoader() {
    return (
        <div className="flex flex-col gap-4 animate-pulse">
            <div className="aspect-7/8 rounded-xl bg-slate-200 dark:bg-surface-dark shadow-lg"></div>
            <div className="flex flex-col gap-2">
                <div className="h-5 w-3/4 bg-slate-200 dark:bg-surface-dark rounded"></div>
                <div className="h-4 w-1/2 bg-slate-200 dark:bg-surface-dark rounded"></div>
                <div className="h-4 w-1/3 bg-slate-200 dark:bg-surface-dark rounded"></div>
            </div>
        </div>
    );
}
