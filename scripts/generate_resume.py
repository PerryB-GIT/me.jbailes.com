from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.lib import colors

def create_resume():
    doc = SimpleDocTemplate(
        "../public/resume.pdf",
        pagesize=letter,
        rightMargin=0.75*inch,
        leftMargin=0.75*inch,
        topMargin=0.5*inch,
        bottomMargin=0.5*inch
    )

    styles = getSampleStyleSheet()

    # Custom styles
    name_style = ParagraphStyle(
        'Name',
        parent=styles['Heading1'],
        fontSize=18,
        alignment=TA_CENTER,
        spaceAfter=6,
        fontName='Times-Bold'
    )

    contact_style = ParagraphStyle(
        'Contact',
        parent=styles['Normal'],
        fontSize=10,
        alignment=TA_CENTER,
        spaceAfter=12
    )

    section_header = ParagraphStyle(
        'SectionHeader',
        parent=styles['Heading2'],
        fontSize=12,
        fontName='Times-Bold',
        alignment=TA_CENTER,
        spaceBefore=12,
        spaceAfter=6,
        textColor=colors.black
    )

    subsection_style = ParagraphStyle(
        'Subsection',
        parent=styles['Normal'],
        fontSize=10,
        alignment=TA_CENTER,
        spaceAfter=2
    )

    italic_style = ParagraphStyle(
        'Italic',
        parent=styles['Normal'],
        fontSize=10,
        fontName='Times-Italic',
        alignment=TA_CENTER,
        spaceAfter=6
    )

    body_style = ParagraphStyle(
        'Body',
        parent=styles['Normal'],
        fontSize=10,
        alignment=TA_JUSTIFY,
        spaceAfter=6,
        leading=12
    )

    company_style = ParagraphStyle(
        'Company',
        parent=styles['Normal'],
        fontSize=10,
        fontName='Times-Bold',
        spaceBefore=8,
        spaceAfter=2,
        textDecoration='underline'
    )

    bullet_style = ParagraphStyle(
        'Bullet',
        parent=styles['Normal'],
        fontSize=10,
        leftIndent=20,
        spaceAfter=2,
        leading=12
    )

    story = []

    # Header
    story.append(Paragraph("JOHN PERRY BAILES", name_style))
    story.append(Paragraph("166 Wilson St. Haverhill Ma. 01832", contact_style))
    story.append(Paragraph("478-299-1604&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;perry.bailes@gmail.com", contact_style))

    # Section: Technical and Team Management
    story.append(Paragraph("<u>TECHNICAL AND TEAM MANAGEMENT</u>", section_header))
    story.append(Paragraph("<i>Systems ~ Leadership ~ Project Management ~ Training and Development ~ Process Improvement</i>", italic_style))

    summary = """As a Director-level IT professional with two decades of extensive experience, I specialize in
effectively managing and cultivating successful teams. With a proven track record in recruitment,
training, promotion, and retention of top-tier talent, I bring innovation and creativity to the table.
My expertise lies in mentoring high-achieving teams and driving forward business initiatives.
Leveraging data-driven strategies and adept at expectation management, I excel in crafting and
executing visionary plans. Proficient in systems administration and staff development, I am
committed to achieving excellence in implementing initiatives that align with business goals and
objectives."""
    story.append(Paragraph(summary, body_style))

    # Education Section
    story.append(Paragraph("<u>EDUCATION</u>", section_header))
    story.append(Paragraph("GEORGIA SOUTHERN UNIVERSITY, Statesboro, Georgia", subsection_style))
    story.append(Paragraph("<i><b>Bachelor of Arts, History, Asian Studies</b>&nbsp;&nbsp;1996</i>", italic_style))

    # Career Accomplishments
    story.append(Paragraph("<u>CAREER ACCOMPLISHMENTS</u>", section_header))

    # TheVets
    story.append(Paragraph("<u>TheVets</u>", company_style))
    thevets_bullets = [
        "Created a culture of accountability, creating a team of 'leaders' vs employees",
        "Sourced, created and confidence tested a new self help AI for TheVets proprietary management systems",
        "Responsible for creation and implementation of technical ticketing system, processes and infrastructure",
        "Oversight of tech budget for the overall technical stack",
        "Negotiation of contractual agreements vendors",
        "Lead multiple initiatives to reduce overall business burn rate",
        "Management of technical operations and field team enablement",
        "Administration of all organizational technical software platforms"
    ]
    for bullet in thevets_bullets:
        story.append(Paragraph(f"● {bullet}", bullet_style))

    # BetterVet
    story.append(Paragraph("<u>BetterVet</u>", company_style))
    bettervet_bullets = [
        "Scaled technical teams to accommodate explosive 1st year growth from 1 city to 27 US cities.",
        "Oversight of technical budget and contract negotiations",
        "Fleet Management: Admin and installer of Samsara hardware and system dashboard",
        "Developed and implemented key CRM, AI, and HubSpot infrastructure projects across multiple teams",
        "Admin to key systems: Google Workspace, Hubspot, JIRA, Verizon, AirCall, Twilio, Intercom AI",
        "Spearheaded developed workflows and logic for AI and internal CRM/CX systems",
        "Created ticketing infrastructure, KPIs, SLAs, reporting and dashboards for multiple departments",
        "Managed email, deliverability and IP reputation for BetterVet",
        "Developed data analytics and reporting to executive and cross functional teams.",
        "Managed all telephony, voip, AI/workflows, software, hardware administration and purchasing for the entire organization",
        "Traveled to multiple destinations to onboard, train and enable field teams for optimal start up",
        "Successfully recruited, managed and trained a team of support engineers, both onsite and remotely.",
        "Created and managed security, hardware and software policy for the entire organization"
    ]
    for bullet in bettervet_bullets:
        story.append(Paragraph(f"● {bullet}", bullet_style))

    # Constant Contact
    story.append(Paragraph("<u>Constant Contact</u>", company_style))
    cc_bullets = [
        "Guided teams in how to have difficult conversations around email deliverability and good sending habits",
        "Successfully created a robust team of email marketing experts that are consistent performance metric leaders.",
        "Identified crucial Salesforce goals and improvements.",
        "Created successful salesforce and excel dashboards that are used across multiple teams",
        "Managed several key business projects that decreased customer pain points while increasing customer education."
    ]
    for bullet in cc_bullets:
        story.append(Paragraph(f"● {bullet}", bullet_style))

    # LogMeIn
    story.append(Paragraph("<u>LogMeIn</u>", company_style))
    logmein_bullets = [
        "Mentored a robust offsite and onsite global support team, 24x7 support coverage.",
        "Evaluated training and quality assurance technical support training across all product lines for representatives,",
        "Created processes to drive better customer engagements using business analytics and KPIs improving overall NPS/CSAT",
        "Executed initiatives that contributed towards improving support to sales conversions by $2.5 million in 2011."
    ]
    for bullet in logmein_bullets:
        story.append(Paragraph(f"● {bullet}", bullet_style))

    # Professional Experience
    story.append(Paragraph("<u>PROFESSIONAL EXPERIENCE</u>", section_header))

    exp_style = ParagraphStyle(
        'Experience',
        parent=styles['Normal'],
        fontSize=10,
        spaceAfter=2
    )

    exp_title_style = ParagraphStyle(
        'ExpTitle',
        parent=styles['Normal'],
        fontSize=10,
        fontName='Times-Italic',
        spaceAfter=6
    )

    experiences = [
        ("TheVets.com", "Director of IT and technical operations", "2024 to current"),
        ("BetterVet.com", "Director of Technology\nSenior Manager of Technology\nManager Of Technology", "2021 to current"),
        ("Purchase and renovation of Multi-Family Home/Property Management", "Property Owner and Restoration Project", "2020 to 2021"),
        ("President and Founder, Wheelhouse America", "President and Founder, Wheelhouse America and all holdings", "2017 to 2020"),
        ("Constant Contact Waltham, Massachusetts", "Manager, Account Review and Coaching", "2014 to 2017"),
        ("LogMeIn, Inc., Woburn, Massachusetts", "Manager, Technical Support\nTeam Lead\nTechnical Support Representative", "2011 to 2014\n2007 to 2011\n2006 to 2007"),
    ]

    for company, title, dates in experiences:
        story.append(Paragraph(company, exp_style))
        story.append(Paragraph(f"<i>{title}</i>", exp_title_style))
        story.append(Paragraph(f"<i>{dates}</i>", exp_title_style))
        story.append(Spacer(1, 6))

    doc.build(story)
    print("Resume PDF generated successfully!")

if __name__ == "__main__":
    create_resume()
