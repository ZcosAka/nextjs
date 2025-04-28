const TableLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col h-full">
            <main className="flex-1 overflow-y-auto scrollbar-hide">
                {children}
            </main>
        </div>
    )
}
export default TableLayout