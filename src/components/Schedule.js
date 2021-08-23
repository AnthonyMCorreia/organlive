import React from "react"

const Schedule = () => {
	return (
		<div id="schedule">
			<div id="schedule-inner">
				<h1 id="schedule-title">Schedule</h1>
				<div className="schedule-item">
					<p className="day">Sunday</p>
					<p className="schedule-item-text">
						We feature hymns, choral music, and other music of the church.
					</p>
				</div>
				<div className="schedule-item">
					<p className="day">Monday</p>
					<p className="schedule-item-text">
						You'll mostly hear music written in the past 200 years.
					</p>
				</div>
				<div className="schedule-item">
					<p className="day">Wednesdays</p>
					<p className="schedule-item-text">
						You'll hear music of the Baroque period, with a large number of
						works by J.S. Bach.
					</p>
				</div>
				<div className="schedule-item">
					<p className="day">Friday</p>
					<p className="schedule-item-text">
						We stick to a playlist of your favorites, as determined by your
						ratings.
					</p>
				</div>
				<div className="schedule-item">
					<p className="day">Saturday</p>
					<p className="schedule-item-text">
						We focus on tracks that haven't been heard by many listeners, tracks
						that haven't been played in a long time, and organists that haven't
						been played recently.
					</p>
				</div>
				<p id="schedule-APOBA">
					The APOBA hour The APOBA hour plays Monday through Saturday and
					features music recorded on instruments created by members of the
					Associated Pipe Organ Builders of America while following the theme of
					the day. For more information about the Association and their members,
					visit their website at APOBA.com all times are UTC -2. Monday - 4am
					Tuesday - 2pm Wednesday - 12pm Thursday - 8am Friday - 6pm Saturday -
					10am
				</p>
			</div>
		</div>
	)
}

export default Schedule
