export function useTaskStatus() {
	function getTaskStatus(status: boolean) {
		switch (status) {
			case true:
				return "text-emerald-500"
			case false:
				return "text-neutral-600"

			default:
				return null
		}
	}

	return { getTaskStatus }
}
